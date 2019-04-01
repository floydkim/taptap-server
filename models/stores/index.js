const { loginStore } = require('./loginStore');
const getAllStores = require('./getAllStores').getAllStores;
const insertStore = require('./insertStore').insertStore;

module.exports = {
  getAllStores: getAllStores,
  insertStore: insertStore,
  loginStore: loginStore
};
