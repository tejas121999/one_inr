const { body } = require("express-validator");


exports.customerValidation = [

    body('name')
        .exists().withMessage('Name is Required')
        .notEmpty().withMessage('Name is Required'),

    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Email Required'),
    body('phone')
        .exists().withMessage('Phone number is Required')
        .notEmpty().withMessage('Phone number is Required'),
    body('gst')
        .exists().withMessage('GST is Required')
        .notEmpty().withMessage('GST is Required'),
    body('pan')
        .exists().withMessage('PAN is Required')
        .notEmpty().withMessage('PAN is Required'),
    body('address')
        .exists().withMessage('Address is Required')
        .notEmpty().withMessage('Address is Required'),
    body('company')
        .exists().withMessage('Company is Required')
        .notEmpty().withMessage('Company is Required'),
    body('panImage')
        .exists().withMessage('Pan image is Required')
        .notEmpty().withMessage('Pan image is Required'),
    body('gstImage')
        .exists().withMessage('GST image is Required')
        .notEmpty().withMessage('GST image is Required'),


]