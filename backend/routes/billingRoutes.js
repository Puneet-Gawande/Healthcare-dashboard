const express = require('express');
const router = express.Router();
const { getAllBills, createBill } = require('../controllers/billingController');

router.get('/', getAllBills);
router.post('/', createBill);

module.exports = router;
