const { Stores } = require('../../database');

exports.getStoreId = email => {
  return Stores.findOne({
    where: {
      email
    }
  }).get('id');
};
