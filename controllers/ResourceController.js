'use strict';

var utils = require('../utils/writer.js');
var ResourceController = require('../service/ResourceControllerService');

module.exports.getPspLogoUsingGET = function getPspLogoUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  ResourceController.getPspLogoUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResourcesUsingGET = function getResourcesUsingGET (req, res, next) {
  ResourceController.getResourcesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getServiceLogoUsingGET = function getServiceLogoUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  ResourceController.getServiceLogoUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
