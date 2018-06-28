'use strict';


/**
 * getPspList
 *
 * idPayment String idPayment
 * paymentType String paymentType (optional)
 * paymentModel Long paymentModel (optional)
 * returns PspListResponse
 **/
exports.getPspListUsingGET = function(idPayment,paymentType,paymentModel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "paymentModel" : 1,
    "idChannel" : "idChannel",
    "idPsp" : "idPsp",
    "lingua" : "IT",
    "idCard" : 6,
    "fixedCost" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "businessName" : "businessName",
    "logoPSP" : "logoPSP",
    "serviceLogo" : "serviceLogo",
    "serviceName" : "serviceName",
    "appChannel" : true,
    "paymentType" : "paymentType",
    "tags" : [ "VISA", "VISA" ],
    "cancelled" : true,
    "idIntermediary" : "idIntermediary",
    "serviceAvailability" : "serviceAvailability",
    "serviceDescription" : "serviceDescription",
    "id" : 0,
    "flagStamp" : true,
    "urlInfoChannel" : "urlInfoChannel"
  }, {
    "paymentModel" : 1,
    "idChannel" : "idChannel",
    "idPsp" : "idPsp",
    "lingua" : "IT",
    "idCard" : 6,
    "fixedCost" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "businessName" : "businessName",
    "logoPSP" : "logoPSP",
    "serviceLogo" : "serviceLogo",
    "serviceName" : "serviceName",
    "appChannel" : true,
    "paymentType" : "paymentType",
    "tags" : [ "VISA", "VISA" ],
    "cancelled" : true,
    "idIntermediary" : "idIntermediary",
    "serviceAvailability" : "serviceAvailability",
    "serviceDescription" : "serviceDescription",
    "id" : 0,
    "flagStamp" : true,
    "urlInfoChannel" : "urlInfoChannel"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getPsp
 *
 * id Long id
 * returns PspResponse
 **/
exports.getPspUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "paymentModel" : 1,
    "idChannel" : "idChannel",
    "idPsp" : "idPsp",
    "lingua" : "IT",
    "idCard" : 6,
    "fixedCost" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "businessName" : "businessName",
    "logoPSP" : "logoPSP",
    "serviceLogo" : "serviceLogo",
    "serviceName" : "serviceName",
    "appChannel" : true,
    "paymentType" : "paymentType",
    "tags" : [ "VISA", "VISA" ],
    "cancelled" : true,
    "idIntermediary" : "idIntermediary",
    "serviceAvailability" : "serviceAvailability",
    "serviceDescription" : "serviceDescription",
    "id" : 0,
    "flagStamp" : true,
    "urlInfoChannel" : "urlInfoChannel"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

