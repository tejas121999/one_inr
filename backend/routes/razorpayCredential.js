var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const {wrapper} = require('../utils/errorWrap')


const {razorpayCredentials,addRazorpayCredentials,updateRazorpayCredentials}= require('../controllers/razorpayCredential') //Importing Vendor controller.



router.get('/',checkAuth,wrapper(razorpayCredentials))

router.post('/',checkAuth,wrapper(addRazorpayCredentials))

router.put('/:id',checkAuth,wrapper(updateRazorpayCredentials))



module.exports = router;
