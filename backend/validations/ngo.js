const { body } = require('express-validator');
const models = require('../models');

exports.ngoValidation = [


    body('name')
        .exists().withMessage('Name is Required.')
        .notEmpty().withMessage('Name is Required.')
        .matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),
    
    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Invalid Email')
        .isLength({ min: 5, max: 50 }).withMessage('Max length of emails is 50'),
    body('mobile')
        .exists().withMessage('Mobile is Required')
        .notEmpty().withMessage('Mobile is Required')
        .custom(async value => {
            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Invalid mobile number");
            }
        })
        .custom(async (value) => {
            return await models.users.findOne({
                where: { mobile: value }
            }).then(phone => {
                if (phone) {
                    return Promise.reject("Mobile Number Already Exist.")
                }
            })
        }),

    body('password')
        .exists().withMessage('Password is required.')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8, max: 15 }).withMessage("Min password length is 8"),

    body('address')
        .exists().withMessage('Address is required')
        .notEmpty().withMessage('Address is required'),

    body('registrationDate')
        .exists().withMessage('Registration Date is required')
        .notEmpty().withMessage('Registration Date is required'),


    body('registrationNumber')
        .exists().withMessage('Registration Number is required')
        .notEmpty().withMessage('Registration Number is required')
        .isLength({ min: 12 }).withMessage('Min length registration number is 12'),

    body('landline')
        .exists().withMessage('landline number is Required')
        .notEmpty().withMessage('landline Number is required')
        .custom(async (value) => {
            return await models.ngo.findOne({
                where: { landline: value }
            }).then(phone => {
                if (phone) {
                    return Promise.reject("landline number already exist.")
                }
            })
        }),

    body('panCard')
        .exists().withMessage('Pan Card is required')
        .notEmpty().withMessage('Pan Card is required'),

    body('panNumber')
        .exists().withMessage('Pan Number is required')
        .notEmpty().withMessage('Pan Number is required')
        .custom(async value => {
            if (!/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/i.test(value)) {
                return Promise.reject("Invalid pan number");
            }
        })
        .custom(async value => {
            return await models.ngo.findOne({
                where: {
                    panNumber: value,
                }
            }).then(panNumber => {
                if (panNumber) {
                    return Promise.reject("Pan number alredy exists!");
                }
            })
        }),

    body('certificate')
        .exists().withMessage('Certificate is required')
        .notEmpty().withMessage('Certificate is required'),

    body('charityRegistrationCertificate')
        .exists().withMessage('Charity Registration Certificate is required is required')
        .notEmpty().withMessage('Charity Registration Certificate is required is required'),

    body('deed')
        .exists().withMessage('deed is required')
        .notEmpty().withMessage('deed is required'),

    body('logo')
        .exists().withMessage('Logo Image is required')
        .notEmpty().withMessage('Logo Image is required'),

    body('signature')
        .exists().withMessage('Signature is required')
        .notEmpty().withMessage('Signature is required'),  

]



