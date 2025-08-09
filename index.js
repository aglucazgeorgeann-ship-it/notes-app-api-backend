// index.js
require('dotenv').config(); 

const express = require('express');
const app = express();

app.use(express.json());

// Import ng mga routers
const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes'); 

// Connect ng routers sa kanilang paths
app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));