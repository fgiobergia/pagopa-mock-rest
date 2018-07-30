"use strict";

var fs = require("fs");

const pspList = require("../mocked/psps.json");

var CARDS_FILE = "./mocked/cards.json";
var AVAIL_BRANDS = ["VISA", "AMEX", "MASTERCARD", "MAESTRO"];

/**
 * addWallet
 *
 * walletRequest WalletRequest walletRequest
 * language String language
 * returns WalletResponse
 **/
exports.addWalletUsingPOST = function(walletRequest, language) {
  return new Promise(function(resolve, reject) {
    var currentCards = JSON.parse(fs.readFileSync(CARDS_FILE, "utf8"));
    var newCard = walletRequest;

    newCard.creditCard.brandLogo =
      AVAIL_BRANDS[~~(Math.random() * AVAIL_BRANDS.length)];
    newCard.idWallet = ~~(Math.random() * 1000000000); // not checking for collisions :O

    currentCards.push(newCard);
    fs.writeFileSync(CARDS_FILE, JSON.stringify(currentCards));

    var examples = {};
    examples["application/json"] = { data: newCard };

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
    var cards = JSON.parse(fs.readFileSync(CARDS_FILE, "utf8"));
    var filteredCards = cards.filter(c => c.idWallet !== id);
    fs.writeFileSync(CARDS_FILE, JSON.stringify({ data: filteredCards }));
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
    const cards = JSON.parse(fs.readFileSync(CARDS_FILE, "utf8"));
    const card = cards.find(c => c.idWallet === parseInt(id));
    var examples = {};
    examples["application/json"] = {
      data: card === undefined ? {} : card
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
      data: JSON.parse(fs.readFileSync(CARDS_FILE, "utf8"))
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
    var currentCards = JSON.parse(fs.readFileSync(CARDS_FILE, "utf8"));
    var requestedCard = currentCards.find(c => c.idWallet === id);
    if (requestedCard === undefined) {
      requestedCard = {};
    } else {
      if (walletRequest.idPsp !== undefined) {
        var newPsp = pspList.find(p => p.id === walletRequest.idPsp);
        if (newPsp !== undefined) {
          requestedCard.idPsp = walletRequest.idPsp;
          requestedCard.psp = newPsp;
          const newCards = currentCards.map(
            c => (c.idWallet === id ? requestedCard : c)
          );
          console.warn(newCards);
          fs.writeFileSync(CARDS_FILE, JSON.stringify(newCards));
        }
      }
    }

    var examples = {};
    examples["application/json"] = {
      data: requestedCard
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
