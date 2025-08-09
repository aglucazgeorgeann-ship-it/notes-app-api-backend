const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

// DB file name
const db = new Database('notes.db');

// Run schema
const schema = fs.readFileSync(path.join(__dirname, 'models', 'user-notes.sql'), 'utf8');
db.exec(schema);

module.exports = db;