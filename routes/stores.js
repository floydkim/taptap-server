const express = require('express');
const insertCustomer = require('../controller/stores/customers').insertCustomer;
const getAllCustomers = require('../controller/stores/customers').getAllCustomers;
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// /customers
router.get('/customers/get-all-customers', getAllCustomers);
router.post('/customers/insert-customer', insertCustomer);

module.exports = router;
