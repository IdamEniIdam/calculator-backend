const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const calculationRoute = require('./Routes/Calculation.js');
const historyRoute = require('./Routes/history'); // Import the new history route
const router = express.Router();
const app = express();
const cors = require('cors'); // Import the cors middleware


// Load environment variables
require('dotenv').config();

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/calculatorDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Use the cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message:
      'Calculator API. Coneccted',
  })
})

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', calculationRoute);
app.use('/api/', historyRoute);

// Define routes (to be created later)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
