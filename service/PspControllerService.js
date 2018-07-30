"use strict";

const pspList = require("../mocked/psps.json");
/**
 * getPspList
 *
 * idPayment String idPayment
 * paymentType String paymentType (optional)
 * paymentModel Long paymentModel (optional)
 * returns PspListResponse
 **/
exports.getPspListUsingGET = function(idPayment, paymentType, paymentModel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: pspList
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * getPsp
 *
 * id Long id
 * returns PspResponse
 **/
exports.getPspUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: pspList[id]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
