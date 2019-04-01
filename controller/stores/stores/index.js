const { loginStore } = require('./loginStore');
const insertStore = require('./insertStore').insertStore;
const getAllStores = require('./getAllStores').getAllStores;

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  loginStore: loginStore
};
