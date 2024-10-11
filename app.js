const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Example route to register a user
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  // Logic to create user in database
  res.status(201).json({ message: 'User registered successfully', user: { username } });
});

// Example route to login a user
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Logic to authenticate user
  res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
});

// Example route to get a user's profile
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to fetch user from database
  res.status(200).json({ message: 'User found', user: { id: userId, username: 'testuser' } });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
