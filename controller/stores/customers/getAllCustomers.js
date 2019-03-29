const getAllCustomers = require('../../../models/customer').getAllCustomers;

exports.getAllCustomers = (request, response) => {
  getAllCustomers().then((customers) => {
    response.status(200).json(customers);
  }).catch((error) => {
    console.error(error);
    response.sendStatus(500);
  });
};