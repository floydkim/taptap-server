const insertCustomer = require('./insertCustomer').insertCustomer;
const getAllCustomers = require('./getAllCustomers').getAllCustomers;
const findLastNumber = require('./findLastNumber').findLastNumber;
const signInCustomer = require('./signInCustomer').signInCustomer;

module.exports = {
  getAllCustomers: getAllCustomers,
  insertCustomer: insertCustomer,
  findLastNumber: findLastNumber,
  signInCustomer: signInCustomer
};
