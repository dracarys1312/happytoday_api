'use strict';
var express = require('express'),
    router = express.Router();

router.use('/api/users', require('./users'));
router.use('/api/thoughts', require('./thoughts'));

module.exports = router;
