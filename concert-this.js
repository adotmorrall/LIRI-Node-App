var axios = require('axios');

/*
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")
*/

var band = process.argv[2];

axios.get('https://rest.bandsintown.com/artists/' + (band || 'U2') + '/events?app_id=codingbootcamp')
    .then(function (response) {
        console.log(response);
    })