const { body } = require("express-validator");

exports.users_receiptsValidation = [

    body('reciept_number')
        .exists().withMessage('Reciept number is Required')
        .notEmpty().withMessage('Reciept number is Required'),

    body('amount')
        .exists().withMessage('Amount is Required')
        .notEmpty().withMessage('Amount is Required'),

    body('transaction_type')
        .exists().withMessage(' Transaction type is Required')
        .notEmpty().withMessage('Transaction type is Required'),

    body('reciept_pdf')
        .exists().withMessage(' Reciept pdf is Required')
        .notEmpty().withMessage('Reciept pdf is Required'),

    body('realization_no')
        .exists().withMessage('Realization number is Required')
        .notEmpty().withMessage('Realization number is Required'),
        
    body('realization_data')
        .exists().withMessage('Realization data is Required')
        .notEmpty().withMessage('Realization data is Required'),

    body('drawn_on_bank')
        .exists().withMessage(' Drawn On Bank is Required')
        .notEmpty().withMessage(' Drawn On Bank is Required'),

    body('branch')
        .exists().withMessage('Branch is Required')
        .notEmpty().withMessage('Branch is Required'),
]