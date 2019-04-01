const { signInStore } = require('./signInStore');
const getAllStores = require('./getAllStores').getAllStores;
const insertStore = require('./insertStore').insertStore;

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  signInStore: signInStore
};
