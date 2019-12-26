var axios = require('axios');
var movie = process.argv[2];
var queryURL = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy';

axios.get(queryURL)
    .then(function (response) {
        var omdbInfo = response.data
        // console.log(omdbInfo);
        console.log('                                               ');
        console.log('Title: ' + omdbInfo.Title);
        console.log('Year: ' + omdbInfo.Year);
        console.log('Rated: ' + omdbInfo.Rated);
        console.log('IMDB Rating: ' + omdbInfo.Ratings.imdbRating);
        console.log('Country: ' + omdbInfo.Country);
        console.log('Language: ' + omdbInfo.Language);
        console.log('Plot: ' + omdbInfo.Plot);
        console.log('Actors: ' + omdbInfo.Actors);
    })
