'use strict';


/**
 * approveTerms
 *
 * approveTermsRequest ApproveTermsRequest approveTermsRequest
 * returns UserResponse
 **/
exports.approveTermsUsingPOST = function(approveTermsRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * changeEmail
 *
 * changeEmailRequest ChangeEmailRequest changeEmailRequest
 * returns UserResponse
 **/
exports.changeEmailUsingPOST = function(changeEmailRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * changePhone
 *
 * changePhoneRequest ChangePhoneRequest changePhoneRequest
 * returns UserResponse
 **/
exports.changePhoneUsingPOST = function(changePhoneRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * checkUsername
 *
 * username String username
 * returns CheckUsernameResponse
 **/
exports.checkUsernameUsingGET = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "available" : true,
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * emailValidation
 *
 * id String id
 * returns UserResponse
 **/
exports.emailValidationUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * generateResetPassword
 *
 * idPayment String idPayment (optional)
 * verifiedPuk String verifiedPuk (optional)
 * returns VerifyUserResponse
 **/
exports.generateResetPasswordUsingGET = function(idPayment,verifiedPuk) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "verifiedPuk" : "verifiedPuk",
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "session" : {
      "sessionToken" : "sessionToken",
      "user" : {
        "registeredDate" : "2000-01-23T04:56:07.000+00:00",
        "surname" : "surname",
        "puk" : "puk",
        "acceptTerms" : true,
        "name" : "name",
        "cellphone" : "cellphone",
        "spidToken" : "spidToken",
        "otp" : {
          "value" : "value"
        },
        "temporaryCellphone" : "temporaryCellphone",
        "email" : "email",
        "status" : "ANONYMOUS",
        "username" : "username"
      }
    },
    "puk" : "puk",
    "tokenPukVerified" : "tokenPukVerified",
    "acceptTerms" : true,
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "idPayment" : "idPayment",
    "password" : "password",
    "surname" : "surname",
    "name" : "name",
    "cellphone" : "cellphone",
    "temporaryCellphone" : "temporaryCellphone",
    "newEmailReceiver" : "newEmailReceiver",
    "tokenEMailVerify" : "tokenEMailVerify",
    "email" : "email",
    "status" : "ANONYMOUS",
    "tokenEmailResetPassword" : "tokenEmailResetPassword",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getSessionSpid
 *
 * spidToken String spidToken
 * returns SpidSessionResponse
 **/
exports.getSessionSpidUsingGET = function(spidToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "telephoneNumber" : "telephoneNumber",
    "surname" : "surname",
    "fiscalCode" : "fiscalCode",
    "name" : "name",
    "verified" : true,
    "email" : "email",
    "token" : "token"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getUser
 *
 * returns UserResponse
 **/
exports.getUserUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * logicDeletePendingUser
 *
 * logicDeleteRequest LogicDeleteRequest logicDeleteRequest
 * returns LogicDeleteResponse
 **/
exports.logicDeletePendingUserUsingPOST = function(logicDeleteRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "userStatusEnum" : [ "ANONYMOUS", "ANONYMOUS" ],
    "email" : "email"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * login
 *
 * loginRequest LoginRequest loginRequest
 * returns SessionResponse
 **/
exports.loginUsingPOST = function(loginRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "sessionToken" : "sessionToken",
    "user" : {
      "registeredDate" : "2000-01-23T04:56:07.000+00:00",
      "surname" : "surname",
      "puk" : "puk",
      "acceptTerms" : true,
      "name" : "name",
      "cellphone" : "cellphone",
      "spidToken" : "spidToken",
      "otp" : {
        "value" : "value"
      },
      "temporaryCellphone" : "temporaryCellphone",
      "email" : "email",
      "status" : "ANONYMOUS",
      "username" : "username"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * logout
 *
 * no response value expected for this operation
 **/
exports.logoutUsingPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * recovery
 *
 * recoveryRequest RecoveryRequest recoveryRequest
 * returns UserResponse
 **/
exports.recoveryUsingPOST = function(recoveryRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * resetPasswordValidation
 *
 * id String id
 * returns UserResponse
 **/
exports.resetPasswordValidationUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * sendEmailVerificationToken
 *
 * email String email
 * returns String
 **/
exports.sendEmailVerificationTokenUsingGET = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "100";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * setPassword
 *
 * setPasswordRequest SetPasswordRequest setPasswordRequest
 * returns UserResponse
 **/
exports.setPasswordUsingPOST = function(setPasswordRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * signin
 *
 * verifyUserRequest VerifyUserRequest verifyUserRequest
 * returns UserResponse
 **/
exports.signinUsingPOST = function(verifyUserRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * startSessionSpid
 *
 * returns SpidSessionResponse
 **/
exports.startSessionSpidUsingPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "telephoneNumber" : "telephoneNumber",
    "surname" : "surname",
    "fiscalCode" : "fiscalCode",
    "name" : "name",
    "verified" : true,
    "email" : "email",
    "token" : "token"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * startSession
 *
 * startSessionRequest StartSessionRequest startSessionRequest
 * returns SessionResponse
 **/
exports.startSessionUsingPOST = function(startSessionRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "sessionToken" : "sessionToken",
    "user" : {
      "registeredDate" : "2000-01-23T04:56:07.000+00:00",
      "surname" : "surname",
      "puk" : "puk",
      "acceptTerms" : true,
      "name" : "name",
      "cellphone" : "cellphone",
      "spidToken" : "spidToken",
      "otp" : {
        "value" : "value"
      },
      "temporaryCellphone" : "temporaryCellphone",
      "email" : "email",
      "status" : "ANONYMOUS",
      "username" : "username"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * updatePassword
 *
 * setPasswordRequest SetPasswordRequest setPasswordRequest
 * returns UserResponse
 **/
exports.updatePasswordUsingPUT = function(setPasswordRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * updateSessionSpid
 *
 * startSpidSessionRequest StartSpidSessionRequest startSpidSessionRequest
 * no response value expected for this operation
 **/
exports.updateSessionSpidUsingPUT = function(startSpidSessionRequest) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * updateUser
 *
 * userRequest UserRequest userRequest
 * returns UserResponse
 **/
exports.updateUserUsingPUT = function(userRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * verifyUserPassword
 *
 * verifyUserRequest VerifyUserRequest verifyUserRequest
 * returns UserResponse
 **/
exports.verifyUserPasswordUsingPOST = function(verifyUserRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "surname" : "surname",
    "puk" : "puk",
    "acceptTerms" : true,
    "name" : "name",
    "cellphone" : "cellphone",
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "temporaryCellphone" : "temporaryCellphone",
    "email" : "email",
    "status" : "ANONYMOUS",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * verifyUserPuk
 *
 * verifyUserRequest VerifyUserRequest verifyUserRequest
 * returns VerifyUserResponse
 **/
exports.verifyUserPukUsingPOST = function(verifyUserRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "verifiedPuk" : "verifiedPuk",
    "registeredDate" : "2000-01-23T04:56:07.000+00:00",
    "session" : {
      "sessionToken" : "sessionToken",
      "user" : {
        "registeredDate" : "2000-01-23T04:56:07.000+00:00",
        "surname" : "surname",
        "puk" : "puk",
        "acceptTerms" : true,
        "name" : "name",
        "cellphone" : "cellphone",
        "spidToken" : "spidToken",
        "otp" : {
          "value" : "value"
        },
        "temporaryCellphone" : "temporaryCellphone",
        "email" : "email",
        "status" : "ANONYMOUS",
        "username" : "username"
      }
    },
    "puk" : "puk",
    "tokenPukVerified" : "tokenPukVerified",
    "acceptTerms" : true,
    "spidToken" : "spidToken",
    "otp" : {
      "value" : "value"
    },
    "idPayment" : "idPayment",
    "password" : "password",
    "surname" : "surname",
    "name" : "name",
    "cellphone" : "cellphone",
    "temporaryCellphone" : "temporaryCellphone",
    "newEmailReceiver" : "newEmailReceiver",
    "tokenEMailVerify" : "tokenEMailVerify",
    "email" : "email",
    "status" : "ANONYMOUS",
    "tokenEmailResetPassword" : "tokenEmailResetPassword",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

