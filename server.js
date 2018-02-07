// import axios from "axios/index";

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var axios = require('axios');

// mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/weatherApp');
mongoose.connect('mongodb://localhost/weatherApp', function () {
    console.log("DB connection established!");
});

var City = require('./modules/cityModule');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/cities', function(req, res){
    City.find({}, function(err, response) {
        if (err) throw err;
        res.send(response);
    });
});

app.post('/cityDB', function(req, res) {
    if (req.body) {
         var city = new City({
            name: req.body.name,
            comments: []
        });
        city.save(function(err, city) {
            if (err) throw err;
            res.json(city);
        });
    } else {
        res.send({ status: "nok", message: "Nothing received." });
    }
});

app.delete('/:cityID', function(req, res) {
    if (req.params.cityID) {
        City.findByIdAndRemove(req.params.cityID, function (err) {
            if (err) console.error(err);
            console.log('city was deleted');
        });
        res.send({status: "ok", message: "Deleted."});
    } else {
        res.send({ status: "nok", message: "Nothing received." });
    }
});

app.put('/updateComments/:cityID', function(req, res) {
      City.findById(req.params.cityID, function (err, city) {
        if (err) {
            console.error(err);
        }
        city.comments.push(req.body.comment);
        city.save(function (err, data) {
            if (err) throw err;
            res.send(data);
        });
    });
});

app.delete('/:cityID/deleteComment/:commentID', function(req, res) {
    if (req.params.cityID) {
        console.log(req.params.cityID, req.params.commentID);
        City.findById(req.params.cityID, function (err, city) {
            if (err) console.error(err);
            city.comments.pull(req.params.commentID);
            city.save(function (err, data) {
                if (err) console.error(err);
                res.send(data);
                console.log(data);
            })
        });
        // City[req.params.cityID].children.id(_id).remove();

    }
        // City.findByIdAndRemove(req.params.cityID, function (err) {
    //         if (err) console.error(err);
    //         console.log('city was deleted');
    //     });
    //     res.send({status: "ok", message: "Deleted."});
    // } else {
    //     res.send({ status: "nok", message: "Nothing received." });
    // }
});

app.listen(3001, function () {
    console.log("what do you want from me! get me on 3001 ;-)")});