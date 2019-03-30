const insertCustomer = require('./insertCustomer').insertCustomer;
const getAllCustomers = require('./getAllCustomers').getAllCustomers;
const findLastNumber = require('./findLastNumber').findLastNumber;

module.exports = {
  getAllCustomers: getAllCustomers,
  insertCustomer: insertCustomer,
  findLastNumber: findLastNumber
};
