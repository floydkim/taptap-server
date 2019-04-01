const { signInStore } = require('./signInStore');
const insertStore = require('./insertStore').insertStore;
const getAllStores = require('./getAllStores').getAllStores;

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  signInStore: signInStore
};
