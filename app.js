const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const data = require('./data')

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')))

let points = 0;
let level = 0;

app.use(express.json())

app.get('/ping', function (req, res) {
  return res.send(data.dataBlog);
});

app.get('/levelapi', function (req, res) {
  if (points > 30) {
    if (level == 0) {
      return res.send(data.dataDashboard.L1RiskyResources);
    }
    else if (level == 1) {
      return res.send(data.dataDashboard.L2RiskyResources);
    }
    else if (level == 2) {
      return res.send(data.dataDashboard.L3RiskyResources);
    }
  }
  else if (points < 20) {
    if (level == 0 ) {
      return res.send(data.dataDashboard.L1NoRiskResources);
    }
    else if (level == 1) {
      return res.send(data.dataDashboard.L2NoRiskResources);
    }
    else if (level == 2) {
      return res.send(data.dataDashboard.L3NoRiskResources);
    }
  }
  else {
    if (level == 0 ) {
      return res.send(data.dataDashboard.L1SomeRiskResources);
    }
    else if (level == 1) {
      return res.send(data.dataDashboard.L2SomeRiskResources);
    }
    else if (level == 2) {
      return res.send(data.dataDashboard.L3SomeRiskResources);
    }
  }
})

app.post('/quizapi', function(req, res) {
  points = req.body.points;
  level = req.body.level;
  console.log("level is " + level);
})

app.get('/quizgetapi', function(req, res) {
  let response = {
    p: `${points}`,
    l: `${level}`,
    data: ''
  }
  if (points > 30) {
    response.data = data.dataFeatured.featuredInvestmentsC
  } else if (points < 20) {
    response.data = data.dataFeatured.featuredInvestmentsA
  } else {
    response.data = data.dataFeatured.featuredInvestmentsB
  }
  return res.send(response)
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(process.env.PORT || 8080);

