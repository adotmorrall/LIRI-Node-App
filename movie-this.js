var axios = require('axios');
var movie = process.argv[2];
var queryURL = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy';

axios.get(queryURL)
    .then(function (response) {
        var omdbInfo = response.data
        console.log(omdbInfo);
        console.log('Title: ');
        console.log('Year: ');
        console.log('Rated: ');
        console.log('IMDB Rating: ');
        console.log('Country: ');
        console.log('Language: ');
        console.log('Plot: ');
        console.log('Actors: ');
    })