'use strict';

var utils = require('../utils/writer.js');
var PspController = require('../service/PspControllerService');

module.exports.getPspListUsingGET = function getPspListUsingGET (req, res, next) {
  var idPayment = req.swagger.params['idPayment'].value;
  var paymentType = req.swagger.params['paymentType'].value;
  var paymentModel = req.swagger.params['paymentModel'].value;
  PspController.getPspListUsingGET(idPayment,paymentType,paymentModel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPspUsingGET = function getPspUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  PspController.getPspUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
