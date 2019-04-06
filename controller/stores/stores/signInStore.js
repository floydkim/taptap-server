const { getEncryptedPassword } = require('./encryptPassword');
const { signInStore } = require('../../../models/stores');

exports.signInStore = (request, response) => {
  if (request.session.token) {
    return response.status(200).json({
      isSuccess: true,
      id: request.session.token.id
    });
  }

  let { email, password } = request.body;
  password = getEncryptedPassword(password);
  // check email and password

  signInStore({
    email,
    password
  })
    .then(store => {
      const result = {
        isSuccess: false
      };

      if (store) {
        result.isSuccess = true;
        result.id = store.id;
        request.session.token = {
          id: store.id,
          email: email,
          password: password
        };
      }

      return result;
    })
    .then(result => {
      response.status(200).json(result);
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};

exports.signInStoreWithToken = (request, response) => {
  if (request.session.token) {
    response.status(200).json({
      isSuccess: true,
      id: request.session.token.id
    });
  } else {
    response.status(200).json({
      isSuccess: false
    });
  }
};
