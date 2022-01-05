var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')


//importing modules
const { wrapper } = require('../utils/errorWrap')

const {getAllUserReceipts, addUsersReceipts, updateUsersReceipts, getUserReceiptsById, pdfOfUserReceipts, getUserData, getUserReceiptExcel,getUserReceiptCsv } = require('../controllers/usersReceipts') //Importing usersReceipts controller.

// const validationError = require('../middleware/validationError');

const { usersReceiptsValidation } = require('../validations/usersReceipt');//importing users reciept validation from controller

const { pdfForUserReceipt } = require('../controllers/usersReceipts');//importing read user from controller

//routing modules

// router.get('/getalluser', getAllUserReceipts )

router.get('/get-user-receipts-pdf',checkAuth,pdfOfUserReceipts)

router.get('/get-user-receipts-xlsx',checkAuth,getUserReceiptExcel)

router.get('/get-user-receipts-csv',checkAuth,getUserReceiptCsv)

router.get('/userData',checkAuth,getUserData)


router.get('/',checkAuth,wrapper(getAllUserReceipts))// listing user resiepts

router.get('/:id',checkAuth,wrapper(getUserReceiptsById))// listing user by Id


router.get('/reciept-number/:receipt_number',checkAuth,wrapper(pdfForUserReceipt))//getting Reciept pdf by reciept number

router.post('/',checkAuth,usersReceiptsValidation, wrapper(addUsersReceipts))//create user receipt

router.put('/:id',checkAuth,usersReceiptsValidation, wrapper(updateUsersReceipts))//Update User reciept

module.exports = router;