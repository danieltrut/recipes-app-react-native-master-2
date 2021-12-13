const nomgoose = require('mongoose');
const axios = require('axios');
const db = mongoose.connection;


mongoose.connect(`mongodb://localhost:27017/recepts`, { useNewUrlParser: true }, function (err) {

    if (err) throw err;

    console.log('Successfully connected');

});