var express = require('express');
var router = express.Router();
var mySqlQueries = require('../models/burgers');

router.get('/', function (req, res) {

    mySqlQueries.show(function (data) {
        //console.log(data);
        var data1 = {
            burgerData: data
        }
        //render data in tables from show method
        res.render('index', data1);
    });
});

router.post('/create', function (req, res) {
    mySqlQueries.add(req.body.item, function (data) {
        //reloads with newly added burger
        res.redirect('/');
    });
});

router.post('/update/:id', function (req, res) {
    mySqlQueries.eat(req.params.id, function (data) {
        res.redirect('/');
    });
});

module.exports = router;