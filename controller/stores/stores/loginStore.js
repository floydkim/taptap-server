const { loginStore } = require('../../../models/stores');

exports.loginStore = (request, response) => {
  const { email, password } = request.body;
  // check email and password

  loginStore({
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

      response.status(200).json(result);
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
