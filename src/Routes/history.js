// src/routes/history.js
const express = require('express');
const router = express.Router();
const calculationController = require('../Controllers/calculationController');

// Route to retrieve calculation history
router.get('/history', calculationController.getCalculationHistory);

module.exports = router;