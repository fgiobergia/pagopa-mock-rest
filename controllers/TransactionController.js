'use strict';

var utils = require('../utils/writer.js');
var TransactionController = require('../service/TransactionControllerService');

module.exports.checkStatusUsingGET = function checkStatusUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  TransactionController.checkStatusUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransactionUsingGET = function getTransactionUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  TransactionController.getTransactionUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransactionsUsingGET = function getTransactionsUsingGET (req, res, next) {
  TransactionController.getTransactionsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resumeUsingPOST = function resumeUsingPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var resumeRequest = req.swagger.params['resumeRequest'].value;
  TransactionController.resumeUsingPOST(id,resumeRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
