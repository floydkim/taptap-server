const { signInStore } = require('../../../models/stores');

exports.signInStore = (request, response) => {
  const { email, password } = request.body;
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
        result.token = {
          email: email,
          password: password,
          date: new Date()
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
  const { email, password } = request.body.token;

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
