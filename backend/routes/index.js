var express = require('express');
var router = express.Router();

const vendor = require('./vendors') //Importing Vendor Module
const fileUpload = require('./fileUpload') //Importing File Upload Module 
const auth = require('./auth') //Importing Authorization Module
const donor = require('./donor') //Importing Donor Module 
const userReceipts = require('./usersReceipts')//importing User Reciepts
const ngo = require('./ngo')//importing ngo module
const ngoBankDetails = require('./ngoBankDetails')


router.use('/vendor',vendor)
router.use('/fileupload',fileUpload)
router.use('/auth',auth)
router.use('/donor',donor)
router.use('/userReceipts',userReceipts)
router.use('/ngo',ngo)
router.use('/ngoBankDetails',ngoBankDetails)

module.exports = router;
