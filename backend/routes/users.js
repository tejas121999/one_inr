var express = require('express');
var router = express.Router();

const {myProfile} = require('../controllers/myProfile')

router.get('/my-profile',myProfile)


module.exports = router;
