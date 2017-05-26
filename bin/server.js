var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('build'));

app.route('/api/*$').all(function (req, res) {
  var url = 'http://api.deezer.com/' + req.url.replace('/api', '');
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
