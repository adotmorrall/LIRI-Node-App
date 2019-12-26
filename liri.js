require("dotenv").config();

// NPM stuff
var axios = require('axios');
var moment = require('moment');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');

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
        case 'concert-this':
            getArtist();
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
        var songOutput = data.tracks.items[0];

        // console.log(song);
        console.log('                                   ');
        console.log('Artist: ' + songOutput.artists[0].name);
        console.log('Track: ' + songOutput.name);
        console.log('Track preview: ' + songOutput.preview_url);
        console.log('Album: ' + songOutput.album.name);

    });
};

// movie-this command
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
                // console.log(userInput);
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

// concert-this command
function getArtist() {
    var band = userInput;
    axios.get('https://rest.bandsintown.com/artists/' + (band || 'U2') + '/events?app_id=codingbootcamp')
        .then(function (response) {

            var output = response.data;
            // console.log(output);

            for (var i = 0; i < output.length; i++) {
                // console.log(output);
                console.log('                              ');
                // Make first letter of each string uppercase
                var str = band;
                console.log('Artist: ' +
                    str.split(' ')
                        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
                        .join(' ')
                )
                console.log('Venue: ' + output[i].venue.name);
                // Venue location
                console.log('Location: ' + output[i].venue.city + ', ' + output[i].venue.region + ' ' + output[i].venue.country);
                // Venue Time
                console.log('Date/Time: ' + moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format(
                    "MM/DD/YYYY, h:mm A"
                ));
            }
            // handle success + no results
            if (output.length === 0) {
                console.log(`Sorry, we couldn't find anything. Please search for another band/artist!`);
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
};

// do-what-it-says command
function doWhatItSays() {
    fs.readFile('random.txt', 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }
        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(',');

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

        // Make the code run by putting the split data into my arguments for the userQuery function
        liriCall = dataArr[0];
        userInput = dataArr[1];
        userQuery(liriCall, userInput);
    });
}

