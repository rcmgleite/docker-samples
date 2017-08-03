var express = require('express');
var app = express();
app.get('/', function (req, res) {
  console.log('Received request')
  res.send('Hello world');
});
app.listen(30000, function () {
  console.log('Example app listening on port 30000!');
});
