const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// paths to routers
var path = require('path')
var indexRouter = require('./routes/index')
var quizRouter = require('./routes/quiz')

// connect app with routers
app.use('/', indexRouter)
app.use('/quiz', quizRouter)
app.use(express.json())

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);