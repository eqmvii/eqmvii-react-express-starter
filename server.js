const express = require('express')
const app = express()

// Port 3001 by default or else whatever Heroku tells it to be 
const port = process.env.PORT || 3001;

// express looks up files relative to the static directory,
// so it doesn't become part of the url
app.use(express.static('build'));

// API endpoint for testing
app.get('/test', function (req, res) {
    console.log("test endpoint hit");
    res.json("Success! This text delivered from the server.");
  });

// Start up the server:
app.listen(port, function () {
    console.log('App up and listening on port ' + port + '!')
})