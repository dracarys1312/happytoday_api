var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Thought = require('../models/thought.js'),
    db = require('../models'),
    logger = require('../helpers/logger');

module.exports = router;

// get a list of thought
router.get('/getAll', function(req, res) {
    db.Thought
        .find()
        .then(function(thoughts) {
            res.send(JSON.stringify(thoughts));
        }).catch(function(e) {
            res.status(500).send(JSON.stringify(e));
        });
});

// get a list of thought
router.get('/list/:page/:limit', function(req, res) {
    var limit = (req.params.limit) ? req.params.limit : 10;
    var skip = (req.params.page) ? limit * (req.params.page - 1) : 0;
    db.Thought
        .find()
        .skip(skip)
        .limit(limit)
        .sort({
            '_id': 'desc'
        })
        .then(function(thoughts) {
            res.send(JSON.stringify(thoughts));
        }).catch(function(e) {
            res.status(500).send(JSON.stringify(e));
        });
});

// get a thought by id
router.get('/get/:id', function(req, res) {
    logger.debug('Get Thought By Id', req.params.id);
    db.Thought.findOne({
        _id: req.params.id
    }).then(function(thought) {
        res.send(JSON.stringify(thought));
    }).catch(function(e) {
        res.status(500).send(JSON.stringify(e));
    });
});

// create a new thought
router.post('/create', function(req, res, next) {
  Thought.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
