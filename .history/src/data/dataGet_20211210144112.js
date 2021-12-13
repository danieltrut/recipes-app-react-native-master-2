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

var repSchema = mongoose.Schema({
    name: String,
    description: String,
    url: String
});

var Data = mongoose.model('Data', repSchema);

function onSuccess(response) {
    var array = response;
    var arrayLength = Object.keys(array).length
    console.log(arrayLength)
    for (var i = 0; i <= arrayLength; i++) {
        var name = array.data[i].name;
        var desc = array.data[i].description;
        var url = array.data[i].html_url;
        console.log(name + " " + desc + " " + url);

        assignDataValue(name, desc, url)

    }
}