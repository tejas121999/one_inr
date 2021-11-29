var express = require('express');
var router = express.Router();


//importing modules
const { wrapper } = require('../utils/errorWrap')

const userRecieptController = require('../Controllers/usersReceipts') //Importing usersReceipts controller.

const validationError = require('../middleware/validationError');

const { usersReceiptsValidation } = require('../validations/usersReceipt');//importing users reciept validation from controller

const { readUserReceipts } = require('../Controllers/usersReceipts');//importing read user from controller

//routing modules

// router.get('/getalluser', getAllUserReceipts )

router.get('/get-user',wrapper(userRecieptController.getAllUserReceipts))// listing user resiepts

router.post('/add-user',  usersReceiptsValidation, validationError, wrapper(userRecieptController.addUsersReceipts))//create user receipt

router.put('/update-user/:id', usersReceiptsValidation, validationError, wrapper(userRecieptController.updateUsersReceipts))//Update User reciept

router.get('/read-user', readUserReceipts, validationError, wrapper(userRecieptController.readUserReceipts))
//Read User reciepts

module.exports = router;