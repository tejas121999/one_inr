const { body } = require("express-validator");

exports.usersReceiptsValidation = [

    body('receiptNumber')
        .exists().withMessage('Reciept number is required')
        .notEmpty().withMessage('Reciept number is Required'),

    body('amount')
        .exists().withMessage('Amount is Required')
        .notEmpty().withMessage('Amount is Required'),

    body('transactionType')
        .exists().withMessage(' Transaction type is Required')
        .notEmpty().withMessage('Transaction type is Required'),

    body('recieptPdf')
        .exists().withMessage(' Reciept pdf is Required')
        .notEmpty().withMessage('Reciept pdf is Required'),

    body('mailSend')
        .exists().withMessage(' Mail Send is Required')
        .notEmpty().withMessage('Mail Send is Required'),

    body('realizationNo')
        .exists().withMessage('Realization number is Required')
        .notEmpty().withMessage('Realization number is Required'),
        
    body('realizationData')
        .exists().withMessage('Realization data is Required')
        .notEmpty().withMessage('Realization data is Required'),

    body('drawnOnBank')
        .exists().withMessage(' Drawn On Bank is Required')
        .notEmpty().withMessage(' Drawn On Bank is Required'),

    body('branch')
        .exists().withMessage('Branch is Required')
        .notEmpty().withMessage('Branch is Required'),
]