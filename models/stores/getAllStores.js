const { Stores } = require('../../database');

exports.getAllStores = () => {
  return Stores.sync().then(() => Stores.findAll());
};
