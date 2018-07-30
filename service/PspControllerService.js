"use strict";

const pspList = [
  {
    appChannel: false,
    businessName: "Poste Italiane",
    cancelled: false,
    fixedCost: {
      amount: 100,
      decimalDigits: 2,
      currency: "EUR"
    },
    flagStamp: true,
    id: 1,
    idCard: -1,
    idChannel: "1?",
    idIntermediary: "2?",
    idPsp: "1", // same as "id"???
    lingua: "it",
    logoPSP:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Logo_Poste_Italiane.png",
    paymentModel: 16,
    paymentType: "CREDIT_CARD",
    serviceAvailability: "",
    serviceDescription: "Poste Italiane PSP",
    serviceLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Logo_Poste_Italiane.png",
    serviceName: "Poste Italiane",
    tags: ["#PSP", "#posteItaliane"],
    urlInfoChannel: ""
  },
  {
    appChannel: false,
    businessName: "Unicredit",
    cancelled: false,
    fixedCost: {
      amount: 130,
      decimalDigits: 2,
      currency: "EUR"
    },
    flagStamp: true,
    id: 2,
    idCard: -1,
    idChannel: "1?",
    idIntermediary: "2?",
    idPsp: "2", // same as "id"???
    lingua: "it",
    logoPSP:
      "https://globalfinance.s3.amazonaws.com/CACHE/images/media/image/unicredit-logo-1403715778/57392265e5090ec7e4b8420a0bedf5c9.png",
    paymentModel: 16,
    paymentType: "CREDIT_CARD",
    serviceAvailability: "",
    serviceDescription: "PSP Unicredit",
    serviceLogo:
      "https://globalfinance.s3.amazonaws.com/CACHE/images/media/image/unicredit-logo-1403715778/57392265e5090ec7e4b8420a0bedf5c9.png",
    serviceName: "Unicredit",
    tags: [],
    urlInfoChannel: ""
  },
  {
    appChannel: false,
    businessName: "NEXI",
    cancelled: false,
    fixedCost: {
      amount: 150,
      decimalDigits: 2,
      currency: "EUR"
    },
    flagStamp: true,
    id: 3,
    idCard: -1,
    idChannel: "1?",
    idIntermediary: "2?",
    idPsp: "3", // same as "id"???
    lingua: "it",
    logoPSP:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nexi_logo.png",
    paymentModel: 16,
    paymentType: "CREDIT_CARD",
    serviceAvailability: "",
    serviceDescription: "PSP NEXI",
    serviceLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nexi_logo.png",
    serviceName: "Nexi",
    tags: [],
    urlInfoChannel: ""
  }
];
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
