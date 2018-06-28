'use strict';

var utils = require('../utils/writer.js');
var UsersController = require('../service/UsersControllerService');

module.exports.approveTermsUsingPOST = function approveTermsUsingPOST (req, res, next) {
  var approveTermsRequest = req.swagger.params['approveTermsRequest'].value;
  UsersController.approveTermsUsingPOST(approveTermsRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changeEmailUsingPOST = function changeEmailUsingPOST (req, res, next) {
  var changeEmailRequest = req.swagger.params['changeEmailRequest'].value;
  UsersController.changeEmailUsingPOST(changeEmailRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changePhoneUsingPOST = function changePhoneUsingPOST (req, res, next) {
  var changePhoneRequest = req.swagger.params['changePhoneRequest'].value;
  UsersController.changePhoneUsingPOST(changePhoneRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.checkUsernameUsingGET = function checkUsernameUsingGET (req, res, next) {
  var username = req.swagger.params['username'].value;
  UsersController.checkUsernameUsingGET(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailValidationUsingGET = function emailValidationUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  UsersController.emailValidationUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateResetPasswordUsingGET = function generateResetPasswordUsingGET (req, res, next) {
  var idPayment = req.swagger.params['idPayment'].value;
  var verifiedPuk = req.swagger.params['verifiedPuk'].value;
  UsersController.generateResetPasswordUsingGET(idPayment,verifiedPuk)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSessionSpidUsingGET = function getSessionSpidUsingGET (req, res, next) {
  var spidToken = req.swagger.params['spidToken'].value;
  UsersController.getSessionSpidUsingGET(spidToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserUsingGET = function getUserUsingGET (req, res, next) {
  UsersController.getUserUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logicDeletePendingUserUsingPOST = function logicDeletePendingUserUsingPOST (req, res, next) {
  var logicDeleteRequest = req.swagger.params['logicDeleteRequest'].value;
  UsersController.logicDeletePendingUserUsingPOST(logicDeleteRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUsingPOST = function loginUsingPOST (req, res, next) {
  var loginRequest = req.swagger.params['loginRequest'].value;
  UsersController.loginUsingPOST(loginRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutUsingPOST = function logoutUsingPOST (req, res, next) {
  UsersController.logoutUsingPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recoveryUsingPOST = function recoveryUsingPOST (req, res, next) {
  var recoveryRequest = req.swagger.params['recoveryRequest'].value;
  UsersController.recoveryUsingPOST(recoveryRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resetPasswordValidationUsingGET = function resetPasswordValidationUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  UsersController.resetPasswordValidationUsingGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendEmailVerificationTokenUsingGET = function sendEmailVerificationTokenUsingGET (req, res, next) {
  var email = req.swagger.params['email'].value;
  UsersController.sendEmailVerificationTokenUsingGET(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setPasswordUsingPOST = function setPasswordUsingPOST (req, res, next) {
  var setPasswordRequest = req.swagger.params['setPasswordRequest'].value;
  UsersController.setPasswordUsingPOST(setPasswordRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signinUsingPOST = function signinUsingPOST (req, res, next) {
  var verifyUserRequest = req.swagger.params['verifyUserRequest'].value;
  UsersController.signinUsingPOST(verifyUserRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startSessionSpidUsingPOST = function startSessionSpidUsingPOST (req, res, next) {
  UsersController.startSessionSpidUsingPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startSessionUsingPOST = function startSessionUsingPOST (req, res, next) {
  var startSessionRequest = req.swagger.params['startSessionRequest'].value;
  UsersController.startSessionUsingPOST(startSessionRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePasswordUsingPUT = function updatePasswordUsingPUT (req, res, next) {
  var setPasswordRequest = req.swagger.params['setPasswordRequest'].value;
  UsersController.updatePasswordUsingPUT(setPasswordRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSessionSpidUsingPUT = function updateSessionSpidUsingPUT (req, res, next) {
  var startSpidSessionRequest = req.swagger.params['startSpidSessionRequest'].value;
  UsersController.updateSessionSpidUsingPUT(startSpidSessionRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserUsingPUT = function updateUserUsingPUT (req, res, next) {
  var userRequest = req.swagger.params['userRequest'].value;
  UsersController.updateUserUsingPUT(userRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifyUserPasswordUsingPOST = function verifyUserPasswordUsingPOST (req, res, next) {
  var verifyUserRequest = req.swagger.params['verifyUserRequest'].value;
  UsersController.verifyUserPasswordUsingPOST(verifyUserRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifyUserPukUsingPOST = function verifyUserPukUsingPOST (req, res, next) {
  var verifyUserRequest = req.swagger.params['verifyUserRequest'].value;
  UsersController.verifyUserPukUsingPOST(verifyUserRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
