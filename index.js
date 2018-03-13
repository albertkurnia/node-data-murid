var app = require('express')();
var bodyParser = require('body-parser');
var data = require('./data').data;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send(data));
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

