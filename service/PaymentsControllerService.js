'use strict';


/**
 * checkPayment
 *
 * id String id
 * returns PaymentResponse
 **/
exports.checkPaymentUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "idPayment" : "idPayment",
    "urlRedirectEc" : "urlRedirectEc",
    "amount" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "receiver" : "receiver",
    "subject" : "subject",
    "cancelled" : true,
    "id" : 1,
    "bolloDigitale" : true,
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
 * deletePayment
 *
 * id String id
 * no response value expected for this operation
 **/
exports.deletePaymentUsingDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * getPayment
 *
 * id String id
 * returns PaymentResponse
 **/
exports.getPaymentUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "idPayment" : "idPayment",
    "urlRedirectEc" : "urlRedirectEc",
    "amount" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "receiver" : "receiver",
    "subject" : "subject",
    "cancelled" : true,
    "id" : 1,
    "bolloDigitale" : true,
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
 * pay
 *
 * id String id
 * payRequest PayRequest payRequest
 * returns TransactionResponse
 **/
exports.payUsingPOST = function(id,payRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "urlRedirectPSP" : "urlRedirectPSP",
    "amount" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "paymentModel" : 2,
    "idPsp" : 1,
    "grandTotal" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "created" : "2000-01-23T04:56:07.000+00:00",
    "fee" : {
      "amount" : 0,
      "currencyNumber" : "currencyNumber",
      "currency" : "currency",
      "decimalDigits" : 6
    },
    "description" : "description",
    "merchant" : "merchant",
    "error" : true,
    "statusMessage" : "statusMessage",
    "token" : "token",
    "idPayment" : 6,
    "idStatus" : 5,
    "nodoIdPayment" : "nodoIdPayment",
    "success" : true,
    "urlCheckout3ds" : "urlCheckout3ds",
    "id" : 0,
    "idWallet" : 5,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

