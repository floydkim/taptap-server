const { getEncryptedPassword } = require('./encryptPassword');
const { signUpStore } = require('../../../models/stores');

exports.signUpStore = (request, response) => {
  let { email, password, name } = request.body;
  // check email and password

  if (email === '' || password === '' || name === '') {
    return response.status(200).json({
      isSuccess: false
    });
  }

  password = getEncryptedPassword(password);

  signUpStore({
    email,
    password,
    name
  })
    .then(store => {
      const result = {
        isSuccess: false
      };

      if (store[1]) {
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
