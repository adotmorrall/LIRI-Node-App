require("dotenv").config();

var axios = require('axios');
// var moment = require('moment');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// var fs = require('fs');

var liriCall = process.argv[2];
var userInput = process.argv.splice(3, process.argv.length).join(' ');

function userQuery(liriCall, userInput) {
    switch (liriCall) {
        case 'spotify-this-song':
            getSpotifySong();
            break;
        case 'movie-this':
            getMovie();
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
    }
}
userQuery(liriCall, userInput);


// spotify-this-song command
function getSpotifySong() {
    var song = userInput;
    spotify.search({ type: 'track', query: song || 'The Sign Ace of Base' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var output = data.tracks.items[0];

        // console.log(song);
        console.log('                                   ');
        console.log('Artist: ' + output.artists[0].name);
        console.log('Track: ' + output.name);
        console.log('Track preview: ' + output.preview_url);
        console.log('Album: ' + output.album.name);

    });
};

// // movie-this command
function getMovie() {
    var movie = userInput;
    if (!movie) {
        movie = 'Mr. Nobody'
    }
    var queryURL = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy'; ~
        axios.get(queryURL)
            .then(function (response) {
                var omdbInfo = response.data
                // console.log(omdbInfo);
                console.log(userInput);
                console.log('                                               ');
                console.log('Title: ' + omdbInfo.Title);
                console.log('Year: ' + omdbInfo.Year);
                console.log('IMDB Rating: ' + omdbInfo.imdbRating);
                console.log('Rotten Tomatoes Rating: ' + omdbInfo.Ratings[1].Value);
                console.log('Country: ' + omdbInfo.Country);
                console.log('Language: ' + omdbInfo.Language);
                console.log('Actors: ' + omdbInfo.Actors);
                console.log('Plot: ' + omdbInfo.Plot);
            });
};




// liri.js concert-this
// function searchBand(band) {

//     axios.get('https://rest.bandsintown.com/artists/' + (band || 'U2') + '/events?app_id=codingbootcamp')
//         .then(function (response) {
//             // handle success
//             if (response.data.length === 0) {
//                 console.log('yieded no results');
//             }
//             else {
//                 //do reals stuff whenyou have data
//                 console.log(response.data[0]);
//             }
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
// };
// console.log(process.argv.slice(3).join(' '))
// console.log(process.argv[3])