const { signOutStore } = require('./signOutStore');
const { signUpStore } = require('./signUpStore');
const { signInStore, signInStoreWithToken } = require('./signInStore');
const insertStore = require('./insertStore').insertStore;
const getAllStores = require('./getAllStores').getAllStores;

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  signInStore: signInStore,
  signUpStore: signUpStore,
  signOutStore: signOutStore,
  signInStoreWithToken: signInStoreWithToken
};
