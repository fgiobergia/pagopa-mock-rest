"use strict";

/**
 * addWallet
 *
 * walletRequest WalletRequest walletRequest
 * language String language
 * returns WalletResponse
 **/
exports.addWalletUsingPOST = function(walletRequest, language) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        idPagamentoFromEC: "idPagamentoFromEC",
        matchedPsp: true,
        idPsp: 6,
        lastUsage: "2000-01-23T04:56:07.000+00:00",
        pspEditable: true,
        creditCard: {
          expireMonth: "expireMonth",
          securityCode: "securityCode",
          flag3dsVerified: true,
          holder: "holder",
          id: 0,
          pan: "pan",
          brandLogo: "brandLogo",
          expireYear: "expireYear"
        },
        favourite: true,
        psp: {
          paymentModel: 1,
          idChannel: "idChannel",
          idPsp: "idPsp",
          lingua: "IT",
          idCard: 6,
          fixedCost: {
            amount: 0,
            currencyNumber: "currencyNumber",
            currency: "currency",
            decimalDigits: 6
          },
          businessName: "businessName",
          logoPSP: "logoPSP",
          serviceLogo: "serviceLogo",
          serviceName: "serviceName",
          appChannel: true,
          paymentType: "paymentType",
          tags: ["VISA", "VISA"],
          cancelled: true,
          idIntermediary: "idIntermediary",
          serviceAvailability: "serviceAvailability",
          serviceDescription: "serviceDescription",
          id: 0,
          flagStamp: true,
          urlInfoChannel: "urlInfoChannel"
        },
        type: "CREDIT_CARD",
        idWallet: 1
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
 * checkCardBin
 *
 * checkCardBinRequest CheckCardBinRequest checkCardBinRequest
 * returns CheckCardBinResponse
 **/
exports.checkCardBinUsingPOST = function(checkCardBinRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        cardBin: "cardBin",
        urlLogo: "urlLogo"
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
 * confirmWallet
 *
 * id Long id
 * returns WalletResponse
 **/
exports.confirmWalletUsingPOST = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        idPagamentoFromEC: "idPagamentoFromEC",
        matchedPsp: true,
        idPsp: 6,
        lastUsage: "2000-01-23T04:56:07.000+00:00",
        pspEditable: true,
        creditCard: {
          expireMonth: "expireMonth",
          securityCode: "securityCode",
          flag3dsVerified: true,
          holder: "holder",
          id: 0,
          pan: "pan",
          brandLogo: "brandLogo",
          expireYear: "expireYear"
        },
        favourite: true,
        psp: {
          paymentModel: 1,
          idChannel: "idChannel",
          idPsp: "idPsp",
          lingua: "IT",
          idCard: 6,
          fixedCost: {
            amount: 0,
            currencyNumber: "currencyNumber",
            currency: "currency",
            decimalDigits: 6
          },
          businessName: "businessName",
          logoPSP: "logoPSP",
          serviceLogo: "serviceLogo",
          serviceName: "serviceName",
          appChannel: true,
          paymentType: "paymentType",
          tags: ["VISA", "VISA"],
          cancelled: true,
          idIntermediary: "idIntermediary",
          serviceAvailability: "serviceAvailability",
          serviceDescription: "serviceDescription",
          id: 0,
          flagStamp: true,
          urlInfoChannel: "urlInfoChannel"
        },
        type: "CREDIT_CARD",
        idWallet: 1
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
 * deleteWallet
 *
 * id Long id
 * no response value expected for this operation
 **/
exports.deleteWalletUsingDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * favouriteWallet
 *
 * id Long id
 * returns WalletResponse
 **/
exports.favouriteWalletUsingPOST = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        idPagamentoFromEC: "idPagamentoFromEC",
        matchedPsp: true,
        idPsp: 6,
        lastUsage: "2000-01-23T04:56:07.000+00:00",
        pspEditable: true,
        creditCard: {
          expireMonth: "expireMonth",
          securityCode: "securityCode",
          flag3dsVerified: true,
          holder: "holder",
          id: 0,
          pan: "pan",
          brandLogo: "brandLogo",
          expireYear: "expireYear"
        },
        favourite: true,
        psp: {
          paymentModel: 1,
          idChannel: "idChannel",
          idPsp: "idPsp",
          lingua: "IT",
          idCard: 6,
          fixedCost: {
            amount: 0,
            currencyNumber: "currencyNumber",
            currency: "currency",
            decimalDigits: 6
          },
          businessName: "businessName",
          logoPSP: "logoPSP",
          serviceLogo: "serviceLogo",
          serviceName: "serviceName",
          appChannel: true,
          paymentType: "paymentType",
          tags: ["VISA", "VISA"],
          cancelled: true,
          idIntermediary: "idIntermediary",
          serviceAvailability: "serviceAvailability",
          serviceDescription: "serviceDescription",
          id: 0,
          flagStamp: true,
          urlInfoChannel: "urlInfoChannel"
        },
        type: "CREDIT_CARD",
        idWallet: 1
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
 * getWallet
 *
 * id Long id
 * returns WalletResponse
 **/
exports.getWalletUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        idPagamentoFromEC: "idPagamentoFromEC",
        matchedPsp: true,
        idPsp: 6,
        lastUsage: "2000-01-23T04:56:07.000+00:00",
        pspEditable: true,
        creditCard: {
          expireMonth: "expireMonth",
          securityCode: "securityCode",
          flag3dsVerified: true,
          holder: "holder",
          id: 0,
          pan: "pan",
          brandLogo: "brandLogo",
          expireYear: "expireYear"
        },
        favourite: true,
        psp: {
          paymentModel: 1,
          idChannel: "idChannel",
          idPsp: "idPsp",
          lingua: "IT",
          idCard: 6,
          fixedCost: {
            amount: 0,
            currencyNumber: "currencyNumber",
            currency: "currency",
            decimalDigits: 6
          },
          businessName: "businessName",
          logoPSP: "logoPSP",
          serviceLogo: "serviceLogo",
          serviceName: "serviceName",
          appChannel: true,
          paymentType: "paymentType",
          tags: ["VISA", "VISA"],
          cancelled: true,
          idIntermediary: "idIntermediary",
          serviceAvailability: "serviceAvailability",
          serviceDescription: "serviceDescription",
          id: 0,
          flagStamp: true,
          urlInfoChannel: "urlInfoChannel"
        },
        type: "CREDIT_CARD",
        idWallet: 1
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
 * getWallets
 *
 * returns WalletListResponse
 **/
exports.getWalletsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: [
        {
          idPagamentoFromEC: "idPagamentoFromEC",
          matchedPsp: true,
          idPsp: 6,
          lastUsage: "2018-01-23T04:56:07.000+00:00",
          pspEditable: true,
          creditCard: {
            expireMonth: "12",
            securityCode: "123",
            flag3dsVerified: true,
            holder: "Mario Rossi",
            id: 0,
            pan: "1234",
            brandLogo: "VISA",
            expireYear: "2021"
          },
          favourite: true,
          psp: {
            paymentModel: 1,
            idChannel: "idChannel",
            idPsp: "idPsp",
            lingua: "IT",
            idCard: 6,
            fixedCost: {
              amount: 0,
              currencyNumber: "currencyNumber",
              currency: "currency",
              decimalDigits: 6
            },
            businessName: "businessName",
            logoPSP: "logoPSP",
            serviceLogo: "serviceLogo",
            serviceName: "serviceName",
            appChannel: true,
            paymentType: "paymentType",
            tags: ["VISA", "VISA"],
            cancelled: true,
            idIntermediary: "idIntermediary",
            serviceAvailability: "serviceAvailability",
            serviceDescription: "serviceDescription",
            id: 0,
            flagStamp: true,
            urlInfoChannel: "urlInfoChannel"
          },
          type: "CREDIT_CARD",
          idWallet: 1
        },
        {
          idPagamentoFromEC: "idPagamentoFromEC",
          matchedPsp: true,
          idPsp: 6,
          lastUsage: "2018-05-23T08:12:47.000+00:00",
          pspEditable: true,
          creditCard: {
            expireMonth: "8",
            securityCode: "321",
            flag3dsVerified: true,
            holder: "John Doe",
            id: 1,
            pan: "9876",
            brandLogo: "AMEX",
            expireYear: "2019"
          },
          favourite: true,
          psp: {
            paymentModel: 1,
            idChannel: "idChannel",
            idPsp: "idPsp",
            lingua: "IT",
            idCard: 6,
            fixedCost: {
              amount: 0,
              currencyNumber: "currencyNumber",
              currency: "currency",
              decimalDigits: 6
            },
            businessName: "businessName",
            logoPSP: "logoPSP",
            serviceLogo: "serviceLogo",
            serviceName: "serviceName",
            appChannel: true,
            paymentType: "paymentType",
            tags: ["AMEX", "AMEX"],
            cancelled: true,
            idIntermediary: "idIntermediary",
            serviceAvailability: "serviceAvailability",
            serviceDescription: "serviceDescription",
            id: 0,
            flagStamp: true,
            urlInfoChannel: "urlInfoChannel"
          },
          type: "CREDIT_CARD",
          idWallet: 2
        },
        {
          idPagamentoFromEC: "idPagamentoFromEC",
          matchedPsp: true,
          idPsp: 6,
          lastUsage: "2018-05-23T08:12:47.000+00:00",
          pspEditable: true,
          creditCard: {
            expireMonth: "12",
            securityCode: "111",
            flag3dsVerified: true,
            holder: "Mario Rossi",
            id: 2,
            pan: "1010",
            brandLogo: "MASTERCARD",
            expireYear: "2020"
          },
          favourite: true,
          psp: {
            paymentModel: 1,
            idChannel: "idChannel",
            idPsp: "idPsp",
            lingua: "IT",
            idCard: 6,
            fixedCost: {
              amount: 0,
              currencyNumber: "currencyNumber",
              currency: "currency",
              decimalDigits: 6
            },
            businessName: "businessName",
            logoPSP: "logoPSP",
            serviceLogo: "serviceLogo",
            serviceName: "serviceName",
            appChannel: true,
            paymentType: "paymentType",
            tags: ["MASTERCARD", "MASTERCARD"],
            cancelled: true,
            idIntermediary: "idIntermediary",
            serviceAvailability: "serviceAvailability",
            serviceDescription: "serviceDescription",
            id: 0,
            flagStamp: true,
            urlInfoChannel: "urlInfoChannel"
          },
          type: "CREDIT_CARD",
          idWallet: 3
        }
      ]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * updateWallet
 *
 * id Long id
 * walletRequest WalletRequest walletRequest
 * returns WalletResponse
 **/
exports.updateWalletUsingPUT = function(id, walletRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        idPagamentoFromEC: "idPagamentoFromEC",
        matchedPsp: true,
        idPsp: 6,
        lastUsage: "2000-01-23T04:56:07.000+00:00",
        pspEditable: true,
        creditCard: {
          expireMonth: "expireMonth",
          securityCode: "securityCode",
          flag3dsVerified: true,
          holder: "holder",
          id: 0,
          pan: "pan",
          brandLogo: "brandLogo",
          expireYear: "expireYear"
        },
        favourite: true,
        psp: {
          paymentModel: 1,
          idChannel: "idChannel",
          idPsp: "idPsp",
          lingua: "IT",
          idCard: 6,
          fixedCost: {
            amount: 0,
            currencyNumber: "currencyNumber",
            currency: "currency",
            decimalDigits: 6
          },
          businessName: "businessName",
          logoPSP: "logoPSP",
          serviceLogo: "serviceLogo",
          serviceName: "serviceName",
          appChannel: true,
          paymentType: "paymentType",
          tags: ["VISA", "VISA"],
          cancelled: true,
          idIntermediary: "idIntermediary",
          serviceAvailability: "serviceAvailability",
          serviceDescription: "serviceDescription",
          id: 0,
          flagStamp: true,
          urlInfoChannel: "urlInfoChannel"
        },
        type: "CREDIT_CARD",
        idWallet: 1
      }
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
