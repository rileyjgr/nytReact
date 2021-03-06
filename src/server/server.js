const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index.js');

require('dotenv').config();

const app = express();


const port = process.env.PORT || 3001;

const mongoConnect = process.env.MONGODB_URI || 'mongodb://localhost:27017/chime';

mongoose.connect(mongoConnect).then(function(error) {
    if (error) {
        console.log(error);
    }
});

const db = mongoose.connection;
Schema = mongoose.Schema;


db.on("error", console.error.bind(console, "connection error:"));

db.once('open', function(){
    routes.html(app);
    app.listen(port);
});

