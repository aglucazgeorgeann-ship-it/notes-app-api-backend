// routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Placeholder user data
const users = [{
  id: 1,
  username: 'testuser',
  password: 'testpassword'
}];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(u => u.username === username);
  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ message: 'Server configuration error' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' });

  res.status(200).json({
    message: 'Login successful!',
    token: token
  });
});

module.exports = router;