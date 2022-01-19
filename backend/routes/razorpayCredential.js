var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const {wrapper} = require('../utils/errorWrap')
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')

const {razorpayCredentials,addRazorpayCredentials,updateRazorpayCredentials,getRazorpayCredentialsById}= require('../controllers/razorpayCredential') //Importing Vendor controller.

router.get('/',checkAuth,checkRolesAndPermission,wrapper(razorpayCredentials))

router.post('/',checkAuth,checkRolesAndPermission,wrapper(addRazorpayCredentials))

router.put('/:id',checkAuth,checkRolesAndPermission,wrapper(updateRazorpayCredentials))

router.get('/:id',checkAuth,wrapper(getRazorpayCredentialsById))


module.exports = router;
