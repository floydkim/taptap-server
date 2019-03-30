const { Customers } = require('../../database');

exports.getAllCustomers = () => {
  return Customers.sync().then(() => Customers.findAll());
};
