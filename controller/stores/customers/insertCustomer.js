const { insertCustomer } = require('../../../models/customer');

exports.insertCustomer = (request, response) => {
  insertCustomer(request.body)
    .then(customer => {
      response.status(200).json(customer);
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
