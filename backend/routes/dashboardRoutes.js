const express = require('express');
const router = express.Router();
const { getSummaryStats, getAppointmentsChart, getBillingChart } = require('../controllers/dashboardController');

router.get('/summary', getSummaryStats);
router.get('/appointments/chart', getAppointmentsChart);
router.get('/billing/chart', getBillingChart);

module.exports = router;
