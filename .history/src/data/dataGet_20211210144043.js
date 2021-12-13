const nomgoose = require('mongoose');
const axios = require('axios');
const db = mongoose.connection;


mongoose.connect(`mongodb://localhost:27017/recepts`, { useNewUrlParser: true }, function (err) {

    if (err) throw err;

    console.log('Successfully connected');

});

axios.get('https://api.github.com/users/PowellTravis/repos?per_page=100&page=1')
    .then(function (response) {
        onSuccess(response)
    })
    .catch(function (error) {
        console.log(error);
    });