var express = require('express');
var router = express.Router();

const vendor = require('./vendors') //Importing Vendor Module
const fileUpload = require('./fileUpload') //Importing File Upload Module 
const auth = require('./auth') //Importing Authorization Module
const donor = require('./donor') //Importing Donor Module 
const userReceipts = require('./usersReceipts')//importing User Reciepts
const ngo = require('./ngo')//importing ngo module
const users = require('./users') //Importing users 
const partner = require('./partner')
const csvUpload = require('./csvFileUploads')
const checkAuth = require('../middleware/checkAuth')
const projects = require('./projects')
const entity = require('./entity');
const permissions = require('./permissions');
const roles = require('./roles')

router.use('/vendor',checkAuth,vendor)
router.use('/fileupload',checkAuth,fileUpload)
router.use('/auth',auth)
router.use('/donor',checkAuth,donor)
router.use('/userReceipts',userReceipts)
router.use('/projects', projects)
router.use('/ngo',checkAuth,ngo)
router.use('/partner',checkAuth,partner)
router.use('/csvUserUpload',checkAuth,csvUpload)
router.use('/user',checkAuth,users)
router.use('/entity',checkAuth, entity )
router.use('/permissions',checkAuth,permissions)
router.use('/roles',checkAuth,roles)



module.exports = router;
