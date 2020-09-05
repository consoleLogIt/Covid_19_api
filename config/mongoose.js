const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/covid_19_devlopment');

const db = mongoose.connection;


db.once('open',function(){
    console.log('connected to db');
})


module.exports = db;