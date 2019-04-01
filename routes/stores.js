const express = require('express');
const { signUpStore } = require('../controller/stores/stores');
const { insertCoupon, getAllCoupons } = require('../controller/stores/coupons');
const { insertReward, getAllRewards } = require('../controller/stores/rewards');
const {
  insertStore,
  getAllStores,
  signInStore
} = require('../controller/stores/stores');
const {
  insertCustomer,
  getAllCustomers,
  findLastNumber
} = require('../controller/stores/customers');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// /customers
router.get('/customers/get-all-customers', getAllCustomers);
router.post('/customers/insert-customer', insertCustomer);
router.post('/customers/find-last-number', findLastNumber);

// /stores
router.get('/stores/get-all-stores', getAllStores);
router.post('/stores/insert-store', insertStore);
router.post('/stores/signin-store', signInStore);
router.post('/stores/signup-store', signUpStore);

// /rewards
router.get('/rewards/get-all-rewards', getAllRewards);
router.post('/rewards/insert-reward', insertReward);

// /coupons
router.get('/coupons/get-all-coupons', getAllCoupons);
router.post('/coupons/insert-coupon', insertCoupon);

module.exports = router;
