const { signInStore, signUpStore } = require('./sign');
const getAllStores = require('./getAllStores').getAllStores;
const insertStore = require('./insertStore').insertStore;
const getName = require('./getName').getName;
const getStoreId = require('./getStoreId').getStoreId;

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  signInStore: signInStore,
  signUpStore: signUpStore,
  getName: getName,
  getStoreId: getStoreId
};
