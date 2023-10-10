const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
  expression: String,
  result: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Calculation', calculationSchema);
