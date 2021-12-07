var express = require('express');
var router = express.Router();


//importing modules
const { wrapper } = require('../utils/errorWrap')

const {getAllUserReceipts, addUsersReceipts, updateUsersReceipts, getUserReceiptsById } = require('../controllers/usersReceipts') //Importing usersReceipts controller.

const validationError = require('../middleware/validationError');

const { usersReceiptsValidation } = require('../validations/usersReceipt');//importing users reciept validation from controller

// const { readUserReceipts } = require('../Controllers/usersReceipts');//importing read user from controller

//routing modules

// router.get('/getalluser', getAllUserReceipts )

router.get('/get-users',wrapper(getAllUserReceipts))// listing user resiepts

router.get('/get-user-id/:id', wrapper(getUserReceiptsById))// listing user by Id

router.post('/add-user',  usersReceiptsValidation, validationError, wrapper(addUsersReceipts))//create user receipt

router.put('/update-user/:id', usersReceiptsValidation, validationError, wrapper(updateUsersReceipts))//Update User reciept

module.exports = router;