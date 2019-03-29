const {Stores} = require('../../database');

exports.insertStore = (store) => {
  return Stores.create({
    name: store.name
  });
};