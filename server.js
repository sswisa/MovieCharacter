var express = require('express');
var path = require('path');
var app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/MovieCharacter'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/MovieCharacter/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
