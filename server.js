const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');


//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use routes
app.use('/api', apiRoutes);

//default response 
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

});