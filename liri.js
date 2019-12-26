require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require('axios');

var spotify = new Spotify(keys.spotify);

// liri.js spotify-this-song
// function userSongSearch(song) {
//     spotify.search({ type: 'track', query: song || 'The Sign Ace of Base' }, function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }

//         console.log(data.tracks.items[0]);

//     });
// };

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

// function commandHandler(arg, command) {
//     if (command === 'spotify-this-song') {
//         userSongSearch(arg);
//     }
// };
// commandHandler('Hotel California', 'spotify-this-song');