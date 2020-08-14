const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const data = require('./data')

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')))

let points = 0;

app.use(express.json())

app.get('/ping', function (req, res) {
  return res.send(data.dataBlog);
});

app.post('/quizapi', function(req, res) {
  points = req.body.points;
  console.log(points);
})

app.get('/quizgetapi', function(req, res) {
  return res.send(`${points}`)
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 8080);

