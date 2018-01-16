const express = require('express');
const app = express();
const Datastore = require('nedb'),
    db = new Datastore({
        filename: 'db.json',
        autoload: true
    });
const port = process.env.PORT || 5000;

app.get(['/everyone'], (req, res) => {
    db.find({},(err, docs) => {
        res.setHeader('Content-Type', 'application/json');
        res.send({express: docs});
    });
});

app.get(['/male'], (req, res) => {
    db.find({gender: 'male'},(err, docs) => {
        res.setHeader('Content-Type', 'application/json');
        res.send({express: docs});
    });
});

app.get(['/female'], (req, res) => {
    db.find({gender: 'female'},(err, docs) => {
        res.setHeader('Content-Type', 'application/json');
        res.send({express: docs});
    });
});

app.get(['/under30'], (req, res) => {
    db.find({age:{$lt: 30}},(err, docs) => {
        res.setHeader('Content-Type', 'application/json');
        res.send({express: docs});
    });
});

app.get(['/over30'], (req, res) => {
    db.find({age:{$gt: 30}},(err, docs) => {
        res.setHeader('Content-Type', 'application/json');
        res.send({express: docs});
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));