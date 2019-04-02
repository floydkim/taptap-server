const express = require('express');
const { getRequiredCount } = require('../controller/apps/rewards');
const router = express.Router();
const { signInCustomer } = require('../controller/apps/customers');
const {
  getVisitedStores,
  getCouponsCount
} = require('../controller/apps/coupons');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//customers
router.post('/customers/signin-customer', signInCustomer);

//coupons
router.post('/coupons/get-visited-stores', getVisitedStores);
router.post('/coupons/get-coupons-count', getCouponsCount);

//rewards
router.post('/rewards/get-required-count', getRequiredCount);

module.exports = router;
