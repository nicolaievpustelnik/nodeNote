const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Glabal variables

// Routes
app.get('/', (req, res) => {
    res.send('Hello world')
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;