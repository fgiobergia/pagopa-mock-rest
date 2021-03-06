"use strict";

var fs = require("fs"),
  path = require("path"),
  http = require("http"),
  cors = require("cors");

var app = require("connect")();
var swaggerTools = require("swagger-tools");
var jsyaml = require("js-yaml");
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, "/swagger.json"),
  controllers: path.join(__dirname, "./controllers"),
  useStubs: process.env.NODE_ENV === "development" // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, "api/swagger.yaml"), "utf8");
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  /**
   * Reset file(s)
   */
  app.use((req, res, next) => {
    if (req.url === "/reset") {
      fs.createReadStream("cards.orig.json").pipe(
        fs.createWriteStream("cards.json")
      );
      res.writeHead(200);
      res.end();
    } else {
      next();
    }
  });

  // app.use(function(req, res, next) {
  //   res.set({
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers":
  //       "Origin, X-Requested-With, Content-Type, Accept"
  //   });
  //   next();
  // });
  app.use(cors());

  /**
   * Make sure the requester is sending an
   * "Authorization: Bearer <token>" header.
   * Then, ignore it
   */
  app.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    if (
      (req.headers.authorization === undefined ||
        !req.headers.authorization.match(/^bearer .+$/i)) &&
      !req.url.startsWith("/docs") &&
      !req.url.startsWith("/api")
    ) {
      res.writeHead(401); // Unauthorized if the header is not set
      res.end();
    } else {
      next();
    }
  });

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function() {
    console.log(
      "Your server is listening on port %d (http://localhost:%d)",
      serverPort,
      serverPort
    );
    console.log(
      "Swagger-ui is available on http://localhost:%d/docs",
      serverPort
    );
  });
});
