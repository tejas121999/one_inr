var express = require('express');
var router = express.Router();


const {wrapper} = require('../utils/errorWrap')


const {razorpayCredentials,addRazorpayCredentials,updateRazorpayCredentials}= require('../controllers/razorpayCredential') //Importing Vendor controller.



router.get('/',wrapper(razorpayCredentials))

router.post('/',wrapper(addRazorpayCredentials))

router.put('/:id',wrapper(updateRazorpayCredentials))



module.exports = router;
