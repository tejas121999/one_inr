const { body } = require("express-validator");


exports.partnerValidation = [

    body('name')
        .exists().withMessage('name is Required')
        .notEmpty().withMessage('name is Required'),
    body('phone')
        .exists().withMessage('Phone number is Required')
        .notEmpty().withMessage('Phone number is Required'),
    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Email Required'),
    body('gstNumber')
        .exists().withMessage('GST Number is Required')
        .notEmpty().withMessage('GST Number is Required'),
    body('panNumber')
        .exists().withMessage('PAN Number is Required')
        .notEmpty().withMessage('PAN Number is Required'),
    body('gstImage')
        .exists().withMessage('GST image is Required')
        .notEmpty().withMessage('GST image is Required'),
    // body('panImage')
    //     .exists().withMessage('Pan image is Required')
    //     .notEmpty().withMessage('Pan image is Required'),
    // body('companyName')
    //     .exists().withMessage('Company is Required')
    //     .notEmpty().withMessage('Company is Required'),
    body('Address')
        .exists().withMessage('Address is Required')
        .notEmpty().withMessage('Address is Required')

]