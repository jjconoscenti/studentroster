var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var roster = [{
        name: "Mark"
    },
    {
        name: "Allen"
    },
    {
        name: "Jeff"
    }
]

// define a route that returns a welcome message
app.get("/", function(req, res) {
    res.send("Welcome to class!");
});

// get route that returns 3 students
app.get("/students"),
    function(req, res) {
        res.json(roster);
    }

// return student by id
app.get("/students/:studentId", function(req, res) {
    res.json(roster[
        req.params.studentId
    ]);
});

// add new student to the roster!
app.post("/add", function(req, res) {
    console.log(req.body);
    if (req.body) {
        roster.push(req.body);
        res.send('Student added!');
    }
});

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});