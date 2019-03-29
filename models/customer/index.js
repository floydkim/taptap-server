const insertCustomer = require('./insertCustomer').insertCustomer;
const getAllCustomers = require('./getAllCustomers').getAllCustomers;

module.exports = {
  getAllCustomers: getAllCustomers,
  insertCustomer: insertCustomer
};