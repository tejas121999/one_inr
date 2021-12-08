var express = require('express');
var router = express.Router();


//importing modules
const { wrapper } = require('../utils/errorWrap')

const {getAllUserReceipts, addUsersReceipts, updateUsersReceipts, getUserReceiptsById } = require('../controllers/usersReceipts') //Importing usersReceipts controller.

const validationError = require('../middleware/validationError');

const { usersReceiptsValidation } = require('../validations/usersReceipt');//importing users reciept validation from controller

const { pdfForUserReceipt } = require('../controllers/usersReceipts');//importing read user from controller

//routing modules

// router.get('/getalluser', getAllUserReceipts )

router.get('/',wrapper(getAllUserReceipts))// listing user resiepts

router.get('/:id', wrapper(getUserReceiptsById))// listing user by Id

router.get('/reciept-number/:receipt_number', wrapper(pdfForUserReceipt))//getting Reciept pdf by reciept number

router.post('/',  usersReceiptsValidation, validationError, wrapper(addUsersReceipts))//create user receipt

router.put('/:id', usersReceiptsValidation, validationError, wrapper(updateUsersReceipts))//Update User reciept

module.exports = router;