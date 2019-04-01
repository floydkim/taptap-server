const { Stores } = require('../../database');

exports.signInStore = signInInformation => {
  return Stores.sync().then(() =>
    Stores.findOne({
      where: signInInformation
    })
  );
};
