const { body } = require("express-validator");


exports.loginValidation = [
    body('email')
        .exists().withMessage('Email Id is required')
        .notEmpty().withMessage('Email Id is required')
        .isEmail().withMessage('Email is Invalid'),

    body('password')
        .exists().withMessage("Password is Required")
        .notEmpty().withMessage("Password is Required")
        .isLength({ min: 4 }).withMessage("Min password length is 4"),
]
