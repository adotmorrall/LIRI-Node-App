require('dotenv').config();
var Spotify = require('node-spotify-api');
var keys = require('./keys');

var spotify = new Spotify(keys.spotify);
var song = process.argv[2];

spotify.search({ type: 'track', query: song || 'The Sign Ace of Base' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    var song = data.tracks.items[0];

    // console.log(song);
    console.log('                                   ');
    console.log('Artist: ' + song.artists[0].name);
    console.log('Track: ' + song.name);
    console.log('Track preview: ' + song.preview_url);
    console.log('Album: ' + song.album.name);
});