var express = require('express');
var router = express.Router();


//importing modules
const {wrapper} = require('../utils/errorWrap')

const {addUsersReceipts, updateUsersReceipts, getAllUserReceipts} = require('../Controllers/usersReceipts/usersReceipts') //Importing usersReceipts controller.

const validationError = require('../middleware/validationError');

const {usersReceiptsValidation} = require('../validations/usersReceipt');



//routing modules

// router.get('/getalluser', getAllUserReceipts )

router.get('/get-user',wrapper(getAllUserReceipts))// listing user resiepts

router.post('/add-user',  usersReceiptsValidation, validationError, wrapper(addUsersReceipts))//create user receipt

router.put('/update-user/:id', usersReceiptsValidation, validationError, wrapper(updateUsersReceipts))//Update User reciept

module.exports = router;