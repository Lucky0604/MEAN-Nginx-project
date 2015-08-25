var express = require('express');
var app = express();
var path = require('path');

// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(8080);
console.log('Server is listening on Port 8080');