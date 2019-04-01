const { signinCustomer } = require('../../models/customer');

exports.signinCustomer = (request, response) => {
  signinCustomer(request.body)
    .then(customer => {
      response.status(200).json(customer);
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
