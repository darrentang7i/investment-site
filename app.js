const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));


app.use(express.json())

app.get('/', function (req, res) {
  console.log("Hello there");
});

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.listen(process.env.PORT || 8080);