const express = require('express');
const db = require('./db/connection');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

})



db.query(`SELECT * FROM employees`, (err, rows) => {
    console.log(rows);
});

// response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});