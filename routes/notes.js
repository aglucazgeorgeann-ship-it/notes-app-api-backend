// routes/notes.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({
        message: 'Successfully accessed protected route!',
        user: req.user,
        data: ['Protected data 1', 'Protected data 2', 'Protected data 3']
    });
});

module.exports = router;