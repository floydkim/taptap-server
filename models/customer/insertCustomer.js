const { Customers } = require('../../database');

exports.insertCustomer = customer => {
  return Customers.findOrCreate({
    where: {
      phoneNumber: customer.phoneNumber
    },
    defaults: {
      phoneNumber: customer.phoneNumber
    }
  });
};
