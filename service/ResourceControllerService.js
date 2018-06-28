'use strict';


/**
 * getPspLogo
 *
 * id Long id
 * no response value expected for this operation
 **/
exports.getPspLogoUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * getResources
 *
 * returns ResourcesResponse
 **/
exports.getResourcesUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * getServiceLogo
 *
 * id Long id
 * no response value expected for this operation
 **/
exports.getServiceLogoUsingGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

