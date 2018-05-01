var app = require('express')();
var bodyParser = require('body-parser');
var data = require('./data');

var port = process.env.PORT || 8081;

var dataMurid = [
  {
    id: 0,
    fullname: "Cahyono Sunarto",
    year: 2014,
    birthPlace: "Sumedang",
    birthYear: "25-11-1994",
    parents: [
      {
        fatherName: "Tarso",
        birthPlace: "Sumedang",
        birthYear: "15-02-1965"
      },
      {
        motherName: "Astri",
        birthPlace: "Mediun",
        birthYear: "21-06-1960"
      }
    ]
  },
  {
    id: 1,
    fullname: "Max Payne",
    year: 2015,
    birthPlace: "New York",
    birthYear: "11-04-1996",
    parents: [
      {
        fatherName: "Andrew K",
        birthPlace: "New York",
        birthYear: "01-03-1970"
      },
      {
        motherName: "Carla",
        birthPlace: "Washington",
        birthYear: "17-09-1975"
      }
    ]
  }
]

app.get('/', (req, res) => res.send(dataMurid));
app.get('/:id', (req, res) => res.send(data[req.params.id]));
app.post('/murid', bodyParser.json(), (req, res) => {
  var newData = {
    id: data.length,
    fullname: req.body.fullname,
    year: req.body.year,
    birthPlace: req.body.birthPlace,
    birthYear: req.body.birthYear,
    parents: [
      {
        fatherName: req.body.parents[0].fatherName,
        birthPlace: req.body.parents[0].birthPlace,
        birthYear: req.body.parents[0].birthYear
      },
      {
        motherName: req.body.parents[1].motherName,
        birthPlace: req.body.parents[1].birthPlace,
        birthYear: req.body.parents[1].birthYear
      }
    ]
  }
  data.push(newData);
  res.send(newData);
});

app.listen(port);
console.log("App is running, listening to: "+ port);

