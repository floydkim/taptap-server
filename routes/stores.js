const express = require('express');
const insertReward = require('../controller/stores/rewards').insertReward;
const getAllRewards = require('../controller/stores/rewards').getAllRewards;
const insertStore = require('../controller/stores/stores').insertStore;
const getAllStores = require('../controller/stores/stores').getAllStores;
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

// /stores
router.get('/stores/get-all-stores', getAllStores);
router.post('/stores/insert-store', insertStore);

// /rewards
router.get('/rewards/get-all-rewards', getAllRewards);
router.post('/rewards/insert-reward', insertReward);

module.exports = router;
