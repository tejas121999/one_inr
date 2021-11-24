var express = require('express');
var router = express.Router();

const {wrapper} = require('../utils/errorWrap')

const {addUsersReceipts, updateUsersReceipts} = require('../Controllers/usersReceipts/usersReceipts')
//Importing usersReceipts controller.
const {getAllUsersReceipts} = require('../utils/pagination')

const validationError = require('../middleware/validationError');

const {usersReceiptsValidation} = require('../validations/usersReceipt');

router.get('/getalluser', getAllUsersReceipts )

router.post('/',  usersReceiptsValidation, validationError, wrapper(addUsersReceipts))

router.put('/:id', usersReceiptsValidation, validationError, wrapper(updateUsersReceipts))

module.exports = router;