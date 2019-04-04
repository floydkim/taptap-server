const { Stores } = require('../../database');

exports.getName = idObject => {
  return Stores.findOne({
    where: {
      id: idObject.storeID
    }
  }).get('name');
};
