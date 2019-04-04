const { Stores } = require('../../database');

exports.getStoreId = email => {
  console.log('ASDFSFSAFSAFSAFSADFSDAF', email);
  return Stores.findOne({
    where: {
      email
    }
  }).get('id');
};
