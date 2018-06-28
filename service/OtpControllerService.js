'use strict';


/**
 * sendOtp
 *
 * sendOtpRequest SendOtpRequest sendOtpRequest
 * no response value expected for this operation
 **/
exports.sendOtpUsingPOST = function(sendOtpRequest) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * verifyOtp
 *
 * verifyOtpRequest VerifyOtpRequest verifyOtpRequest
 * returns UserResponse
 **/
exports.verifyOtpUsingPOST = function(verifyOtpRequest) {
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

