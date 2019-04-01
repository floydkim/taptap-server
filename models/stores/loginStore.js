const { Stores } = require('../../database');

exports.loginStore = loginInformation => {
  return Stores.sync().then(() =>
    Stores.findOne({
      where: loginInformation
    })
  );
};
