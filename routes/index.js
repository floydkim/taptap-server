const express = require('express');
const router = express.Router();

const {Coupons, Stores, Customers, Rewards} = require('../database');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.end('hi!');

  Coupons.sync();
  Stores.sync();
  Customers.sync();
  Rewards.sync();
});

module.exports = router;
