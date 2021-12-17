const { body } = require("express-validator");

exports.usersReceiptsValidation = [

    // body('receiptNumber')
    //     .exists().withMessage('Reciept number is required')
    //     .notEmpty().withMessage('Reciept number is Required'),

    // body('amount')
    //     .exists().withMessage('Amount is Required')
    //     .notEmpty().withMessage('Amount is Required')
    //     .isNumeric().withMessage('Only Numbers allowed.'),

    // body('transactionType')
    //     .exists().withMessage(' Transaction type is Required')
    //     .notEmpty().withMessage('Transaction type is Required'),

    // body('recieptPdf')
    //     .exists().withMessage(' Reciept pdf is Required')
        // .notEmpty().withMessage('Reciept pdf is Required'),

    // body('mailSend')
    //     .exists().withMessage(' Mail Send is Required')
    //     .notEmpty().withMessage('Mail Send is Required'),

    // body('realizationNo')
    //     .exists().withMessage('Realization number is Required')
    //     .notEmpty().withMessage('Realization number is Required'),
        
    // body('realizationDate')
    //     .exists().withMessage('Realization date is Required')
    //     .notEmpty().withMessage('Realization date is Required'),

    // body('drawnOnBank')
    //     .exists().withMessage(' Drawn On Bank is Required')
    //     .notEmpty().withMessage(' Drawn On Bank is Required'),

    // body('branch')
    //     .exists().withMessage('Branch is Required')
    //     .notEmpty().withMessage('Branch is Required'),
]
