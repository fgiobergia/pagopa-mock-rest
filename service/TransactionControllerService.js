"use strict";

var transactionsList = require("../mocked/transactions.json");

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
    const transaction = transactionsList.find(t => t.id === id);
    examples["application/json"] = {
      data: transaction !== undefined ? transaction : {}
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
      total: transactionsList.length,
      data: transactionsList,
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
