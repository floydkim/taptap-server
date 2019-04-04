const { signOutStore } = require('./signOutStore');
const { signUpStore } = require('./signUpStore');
const { signInStore, signInStoreWithToken } = require('./signInStore');
const { insertStore } = require('./insertStore');
const { getAllStores } = require('./getAllStores');
const { getStoreId } = require('./getStoreId');

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  signInStore: signInStore,
  signUpStore: signUpStore,
  signOutStore: signOutStore,
  signInStoreWithToken: signInStoreWithToken,
  getStoreId: getStoreId
};
