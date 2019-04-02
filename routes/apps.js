const express = require('express');
const router = express.Router();
const { signInCustomer } = require('../controller/apps/customers');
const { getVisitedStores } = require('../controller/apps/coupons');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//customers
router.post('/customers/signin-customer', signInCustomer);

//coupons
router.post('/coupons/get-visited-stores', getVisitedStores);

module.exports = router;
