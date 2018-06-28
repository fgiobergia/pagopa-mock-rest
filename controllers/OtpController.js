'use strict';

var utils = require('../utils/writer.js');
var OtpController = require('../service/OtpControllerService');

module.exports.sendOtpUsingPOST = function sendOtpUsingPOST (req, res, next) {
  var sendOtpRequest = req.swagger.params['sendOtpRequest'].value;
  OtpController.sendOtpUsingPOST(sendOtpRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifyOtpUsingPOST = function verifyOtpUsingPOST (req, res, next) {
  var verifyOtpRequest = req.swagger.params['verifyOtpRequest'].value;
  OtpController.verifyOtpUsingPOST(verifyOtpRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
