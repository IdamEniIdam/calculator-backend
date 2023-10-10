// const Calculation = require('../models/Calculation');
const Calculation = require('../Models/models');
const math = require('mathjs'); // Import math.js for calculations

// Controller for performing calculations
exports.performCalculation = async (req, res) => {
  try {
    const { expression } = req.body;

    if (!expression) {
      return res.status(400).json({ error: 'Expression is required.' });
    }

    const result = math.evaluate(expression); // Evaluate the expression using math.js

    // Save the calculation to the database using your Calculation model
    const calculation = new Calculation({
      expression,
      result,
    });
    await calculation.save();
console.log("RESULT...", result)
    // Respond with the result
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while calculating.' });
  }
};

// Controller to retrieve calculation history
exports.getCalculationHistory = async (req, res) => {
  try {
    // Retrieve calculation history from the database (if you have one)
    const history = await Calculation.find().sort({ timestamp: -1 });

    // Respond with the calculation history
    res.status(200).json({ history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching history.' });
  }
};
