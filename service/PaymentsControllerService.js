"use strict";

/**
 * checkPayment
 *
 * id String id
 * returns PaymentResponse
 **/
exports.checkPaymentUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        idPayment: "idPayment",
        urlRedirectEc: "urlRedirectEc",
        amount: {
          amount: 0,
          currencyNumber: "currencyNumber",
          currency: "currency",
          decimalDigits: 6
        },
        receiver: "receiver",
        subject: "subject",
        cancelled: true,
        id: 1,
        bolloDigitale: true,
        email: "email"
      }
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

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
};

/**
 * getPayment
 *
 * id String id
 * returns PaymentResponse
 **/
exports.getPaymentUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        idPayment: "idPayment",
        urlRedirectEc: "urlRedirectEc",
        amount: {
          amount: 0,
          currencyNumber: "currencyNumber",
          currency: "currency",
          decimalDigits: 6
        },
        receiver: "receiver",
        subject: "subject",
        cancelled: true,
        id: 1,
        bolloDigitale: true,
        email: "email"
      }
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * pay
 *
 * id String id
 * payRequest PayRequest payRequest
 * returns TransactionResponse
 **/
exports.payUsingPOST = function(id, payRequest) {
  const now = new Date().toISOString();
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        urlRedirectPSP: "urlRedirectPSP",
        amount: {
          amount: 10052,
          currencyNumber: "1",
          currency: "EUR",
          decimalDigits: 2
        },
        paymentModel: 2,
        idPsp: 1,
        grandTotal: {
          amount: 10102,
          currencyNumber: "1",
          currency: "EUR",
          decimalDigits: 2
        },
        created: now,
        fee: {
          amount: 50,
          currencyNumber: "currencyNumber",
          currency: "currency",
          decimalDigits: 2
        },
        description: "IMU 2018",
        merchant: "Comune di Canicattì",
        error: false,
        statusMessage: "all is well",
        token: "token",
        idPayment: 123,
        idStatus: 5,
        nodoIdPayment: "nodoIdPayment",
        success: true,
        urlCheckout3ds: "urlCheckout3ds",
        id: Math.floor(Math.random() * 1000),
        idWallet: payRequest.idWallet,
        updated: now
      }
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
