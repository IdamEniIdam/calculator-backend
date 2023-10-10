// src/routes/calculation.js
const express = require('express');
const router = express.Router();
const calculationController = require('../Controllers/calculationController');



// Route to perform calculations
router.post('/calculate', calculationController.performCalculation);

module.exports = router;
