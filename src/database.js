const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://localhost/notes-app';

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('Database is connected'))
    .catch(e => console.log(e));

