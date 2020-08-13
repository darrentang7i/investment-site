const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const data = require('./data')

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')))



app.use(express.json())

app.get('/ping', function (req, res) {
  return res.send(data);
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 8080);