const { Customers } = require('../../database');

exports.signInCustomer = customer => {
  return Customers.findOrCreate({
    where: {
      phoneNumber: customer.phoneNumber
    },
    defaults: {
      phoneNumber: customer.phoneNumber
    }
  });
};
