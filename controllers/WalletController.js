'use strict';

var utils = require('../utils/writer.js');
var WalletController = require('../service/WalletControllerService');

module.exports.addWalletUsingPOST = function addWalletUsingPOST (req, res, next) {
  var walletRequest = req.swagger.params['walletRequest'].value;
  var language = req.swagger.params['language'].value;
  WalletController.addWalletUsingPOST(walletRequest,language)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.checkCardBinUsingPOST = function checkCardBinUsingPOST (req, res, next) {
  var checkCardBinRequest = req.swagger.params['checkCardBinRequest'].value;
  WalletController.checkCardBinUsingPOST(checkCardBinRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmWalletUsingPOST = function confirmWalletUsingPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  WalletController.confirmWalletUsingPOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteWalletUsingDELETE = function deleteWalletUsingDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  WalletController.deleteWalletUsingDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.favouriteWalletUsingPOST = function favouriteWalletUsingPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  WalletController.favouriteWalletUsingPOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWalletUsingGET = function getWalletUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  WalletController.getWalletUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWalletsUsingGET = function getWalletsUsingGET (req, res, next) {
  WalletController.getWalletsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateWalletUsingPUT = function updateWalletUsingPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var walletRequest = req.swagger.params['walletRequest'].value;
  WalletController.updateWalletUsingPUT(id,walletRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
