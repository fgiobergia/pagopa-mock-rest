"use strict";

/**
 * checkStatus
 *
 * id String id
 * returns TransactionStatusResponse
 **/
exports.checkStatusUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        acsUrl: "acsUrl",
        idStatus: 0,
        finalStatus: true,
        statusMessage: "statusMessage",
        idTransaction: 6
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
 * getTransaction
 *
 * id Long id
 * returns TransactionResponse
 **/
exports.getTransactionUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        urlRedirectPSP: "urlRedirectPSP",
        amount: {
          amount: 0,
          currencyNumber: "currencyNumber",
          currency: "currency",
          decimalDigits: 6
        },
        paymentModel: 2,
        idPsp: 1,
        grandTotal: {
          amount: 0,
          currencyNumber: "currencyNumber",
          currency: "currency",
          decimalDigits: 6
        },
        created: "2000-01-23T04:56:07.000+00:00",
        fee: {
          amount: 0,
          currencyNumber: "currencyNumber",
          currency: "currency",
          decimalDigits: 6
        },
        description: "description",
        merchant: "merchant",
        error: true,
        statusMessage: "statusMessage",
        token: "token",
        idPayment: 6,
        idStatus: 5,
        nodoIdPayment: "nodoIdPayment",
        success: true,
        urlCheckout3ds: "urlCheckout3ds",
        id: 0,
        idWallet: 5,
        updated: "2000-01-23T04:56:07.000+00:00"
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
 * getTransactions
 *
 * returns TransactionListResponse
 **/
exports.getTransactionsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      total: 3,
      data: [
        {
          urlRedirectPSP: "urlRedirectPSP",
          amount: {
            amount: 19850,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          paymentModel: 2,
          idPsp: 1,
          grandTotal: {
            amount: 20000,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          created: "2018-01-23T04:56:07.000+00:00",
          fee: {
            amount: 150,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          description: "Pagamento TARI 2018",
          merchant: "Comune di Milano - Tributi",
          error: false,
          statusMessage: "statusMessage",
          token: "token",
          idPayment: 6,
          idStatus: 5,
          nodoIdPayment: "nodoIdPayment",
          success: true,
          urlCheckout3ds: "urlCheckout3ds",
          id: 0,
          idWallet: 1,
          updated: "2018-01-23T04:56:07.000+00:00"
        },
        {
          urlRedirectPSP: "urlRedirectPSP",
          amount: {
            amount: 1550,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          paymentModel: 2,
          idPsp: 1,
          grandTotal: {
            amount: 1775,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          created: "2017-12-24T14:56:07.000+00:00",
          fee: {
            amount: 225,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          description: "Certificato di Residenza",
          merchant: "Comune di Segrate",
          error: false,
          statusMessage: "statusMessage",
          token: "token",
          idPayment: 4,
          idStatus: 2,
          nodoIdPayment: "nodoIdPayment",
          success: true,
          urlCheckout3ds: "urlCheckout3ds",
          id: 1,
          idWallet: 2,
          updated: "2000-12-24T14:56:07.000+00:00"
        },
        {
          urlRedirectPSP: "urlRedirectPSP",
          amount: {
            amount: 7335,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          paymentModel: 2,
          idPsp: 1,
          grandTotal: {
            amount: 7400,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          created: "2018-05-30T07:16:47.000+00:00",
          fee: {
            amount: 65,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          description: "Tasse scolastiche",
          merchant: "Agenzia delle Entrate",
          error: false,
          statusMessage: "statusMessage",
          token: "token",
          idPayment: 9,
          idStatus: 0,
          nodoIdPayment: "nodoIdPayment",
          success: true,
          urlCheckout3ds: "urlCheckout3ds",
          id: 2,
          idWallet: 2,
          updated: "2018-05-30T07:16:47.000+00:00"
        },
        {
          urlRedirectPSP: "urlRedirectPSP",
          amount: {
            amount: 900,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          paymentModel: 2,
          idPsp: 1,
          grandTotal: {
            amount: 999,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          created: "2017-05-30T07:16:47.000+00:00",
          fee: {
            amount: 99,
            currencyNumber: "currencyNumber",
            currency: "EUR",
            decimalDigits: 2
          },
          description: "Duplicato patente",
          merchant: "Motorizzazione Civile di Torino",
          error: false,
          statusMessage: "statusMessage",
          token: "token",
          idPayment: 9,
          idStatus: 0,
          nodoIdPayment: "nodoIdPayment",
          success: true,
          urlCheckout3ds: "urlCheckout3ds",
          id: 3,
          idWallet: 2,
          updated: "2017-05-30T07:16:47.000+00:00"
        }
      ],
      size: 0,
      start: 6
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * resume
 *
 * id String id
 * resumeRequest ResumeRequest resumeRequest
 * no response value expected for this operation
 **/
exports.resumeUsingPOST = function(id, resumeRequest) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};
