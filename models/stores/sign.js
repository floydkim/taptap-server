const { Stores } = require('../../database');

exports.signInStore = signInInformation => {
  return Stores.sync().then(() =>
    Stores.findOne({
      where: signInInformation
    })
  );
};

exports.signUpStore = signUpInformation => {
  return Stores.sync().then(() =>
    Stores.findOrCreate({
      where: {
        email: signUpInformation.email
      },
      defaults: signUpInformation
    })
  );
};
