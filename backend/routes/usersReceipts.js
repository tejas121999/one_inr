var express = require('express');
var router = express.Router();


//importing modules
const {wrapper} = require('../utils/errorWrap')

const {addUsersReceipts, updateUsersReceipts, getAllUserReceipts} = require('../Controllers/usersReceipts/usersReceipts') //Importing usersReceipts controller.

const validationError = require('../middleware/validationError');

const {usersReceiptsValidation} = require('../validations/usersReceipt');



//routing modules
// router.get('/getalluser', getAllUsersReceipts )

router.get('/get-user',wrapper(getAllUserReceipts))

router.post('/add-user',  usersReceiptsValidation, validationError, wrapper(addUsersReceipts))

router.put('/update-user/:id', usersReceiptsValidation, validationError, wrapper(updateUsersReceipts))

module.exports = router;