var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {wrapper} = require('../utils/errorWrap')

const {sendOtp}=require('../controllers/userOtp')


router.post('/',sendOtp)





module.exports = router;