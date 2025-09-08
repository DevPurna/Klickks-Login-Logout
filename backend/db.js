// backend/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file
const dbPath = path.join(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to SQLite database.');
});

// Create Users table
db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
    )`,
    (err) => {
        if (err) console.error(err.message);
    }
);

module.exports = db;
