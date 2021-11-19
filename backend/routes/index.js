var express = require('express');
var router = express.Router();

const vendor = require('./vendors') //Importing Vendor Module
const users_receipts = require('../models/usersReceipts') //Importing users_receipts Module
const fileUpload = require('./fileUpload') //Importing File Upload Module 


router.use('/vendor',vendor)
router.use('',users_receipts)
router.use('/fileupload',fileUpload)




module.exports = router;
