const { signInCustomer } = require('../../../models/customer');

exports.signInCustomer = (request, response) => {
  signInCustomer(request.body)
    .then(customer => {
      response.status(200).json(customer);
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
