const { signInStore, signUpStore } = require('./sign');
const getAllStores = require('./getAllStores').getAllStores;
const insertStore = require('./insertStore').insertStore;

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  signInStore: signInStore,
  signUpStore: signUpStore
};
