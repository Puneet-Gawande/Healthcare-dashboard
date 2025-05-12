const express = require('express');
const router = express.Router();
const { getAllDoctors, createDoctor } = require('../controllers/doctorController');

router.get('/', getAllDoctors);
router.post('/', createDoctor);

module.exports = router;
