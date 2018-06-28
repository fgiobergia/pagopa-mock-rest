'use strict';

var utils = require('../utils/writer.js');
var PaymentsController = require('../service/PaymentsControllerService');

module.exports.checkPaymentUsingGET = function checkPaymentUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  PaymentsController.checkPaymentUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePaymentUsingDELETE = function deletePaymentUsingDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  PaymentsController.deletePaymentUsingDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPaymentUsingGET = function getPaymentUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  PaymentsController.getPaymentUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.payUsingPOST = function payUsingPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var payRequest = req.swagger.params['payRequest'].value;
  PaymentsController.payUsingPOST(id,payRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
