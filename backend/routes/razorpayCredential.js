var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const {wrapper} = require('../utils/errorWrap')


const {razorpayCredentials,addRazorpayCredentials,updateRazorpayCredentials}= require('../controllers/razorpayCredential') //Importing Vendor controller.
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')

router.get('/',checkAuth,checkRolesAndPermission,wrapper(razorpayCredentials))

router.post('/',checkAuth,checkRolesAndPermission,wrapper(addRazorpayCredentials))

router.put('/:id',checkAuth,checkRolesAndPermission,wrapper(updateRazorpayCredentials))



module.exports = router;
