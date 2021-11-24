var express = require('express');
var router = express.Router();

const vendor = require('./vendors') //Importing Vendor Module
const usersReceipts = require('./usersReceipts') //Importing usersReceipts from controllers Module
const fileUpload = require('./fileUpload') //Importing File Upload Module 
const auth = require('./auth') //Importing Authorization Module
const donor = require('./donor') //Importing Donor Module 


router.use('/vendor',vendor)
router.use('/userReceipts',usersReceipts)
router.use('/fileupload',fileUpload)
router.use('/auth',auth)
router.use('/donor',donor)



module.exports = router;
