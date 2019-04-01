const express = require('express');
const router = express.Router();
const { insertCustomer } = require('../controller/apps');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/customers/insert-customer', insertCustomer);
module.exports = router;
