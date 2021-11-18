var express = require('express');
var router = express.Router();

const vendor = require('./vendors') //Importing Vendor Module
const fileUpload = require('./fileUpload') //Importing File Upload Module 


router.use('/vendor',vendor)
router.use('/fileupload',fileUpload)




module.exports = router;
