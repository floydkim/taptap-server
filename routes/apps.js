const express = require('express');
const router = express.Router();
const { signInCustomer } = require('../controller/apps/customers');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/customers/signin-customer', signInCustomer);
module.exports = router;
