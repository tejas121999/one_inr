var express = require('express');
var router = express.Router();

const vendor = require('./vendors') 
const fileUpload = require('./fileUpload')
const auth = require('./auth') 
const donor = require('./donor') 
const userReceipts = require('./usersReceipts')
const ngo = require('./ngo')
const users = require('./users') 
const partner = require('./partner') 
const csvUpload = require('./csvFileUploads')
const projects = require('./projects') 
const entity = require('./entity');
const permissions = require('./permissions');
const roles = require('./roles')
const config = require('./configs')
const razorpayCredentials = require('./razorpayCredential')



router.use('/vendor',vendor)
router.use('/fileupload',fileUpload)
router.use('/auth',auth)
router.use('/donor',donor)
router.use('/userReceipts',userReceipts)
router.use('/projects', projects)
router.use('/ngo',ngo)
router.use('/partner',partner)
router.use('/csvUserUpload',csvUpload)
router.use('/user',users)
router.use('/entity', entity )
router.use('/permissions',permissions)
router.use('/roles',roles)
router.use('/configs',config)
router.use('/razorpayCredentials',razorpayCredentials)




module.exports = router;
