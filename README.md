# Calculator App

A simple web-based calculator application built with React for the frontend and Node.js for the backend.


## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division.
- View calculation history.
- Error handling for invalid expressions.

## Technologies Used

- Frontend: React, JavaScript, CSS
- Backend: Node.js, Express.js
- Database (optional): MongoDB with Mongoose (for calculation history)
- Math Library: math.js (for expression evaluation)

## Installation

1. Clone the repository:

   ```bash
   for frontend
   git clone https://github.com/IdamEniIdam/calculator-app.git
   cd calculator-app
   npm start

   for backend 
   git clone https://github.com/IdamEniIdam/calculator-backend.git
  run 
  node src/app.js in the terminal to start the server


API Endpoints (Backend)
POST /api/calculate: Calculate a mathematical expression and save it to the history.

Request body: { "expression": "2 + 2" }
Response: { "result": 4 }
GET /api/history: Retrieve the calculation history.

Response: { "history": [ { "expression": "2 + 2", "result": 4, "timestamp": "2023-10-10T12:00:00Z" } ] }