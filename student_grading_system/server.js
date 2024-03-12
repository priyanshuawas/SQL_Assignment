// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'student_grading_system'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM Students';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching students from database' });
      return;
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
