const { body } = require("express-validator");
const models = require('../models')


exports.partnerValidation = [

    body('name')
        .exists().withMessage('Name is Required.')
        .notEmpty().withMessage('Name is Required.')
        .matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),

    body('phone')
        .exists().withMessage('Mobile is Required')
        .notEmpty().withMessage('Mobile is Required')
        .custom(async value => {
            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Invalid mobile number");
            }
        }),
    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Invalid Email')
        .isLength({ min: 5, max: 50 }).withMessage('Max length of emails is 50'),

    body('gstNumber')
        .exists().withMessage('Gst Number is required')
        .notEmpty().withMessage('Gst Number is required'),

    body('panNumber')
        .exists().withMessage('Pan Number is required')
        .notEmpty().withMessage('Pan Number is required')
        .custom(async value => {
            if (!/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/i.test(value)) {
                return Promise.reject("Invalid pan number");
            }
        })
        .custom(async value => {
            return await models.partners.findOne({
                where: {
                    panNumber: value,
                }
            }).then(panNumber => {
                if (panNumber) {
                    return Promise.reject("Pan number alredy exists!");
                }
            })
        }),

    body('gstImage')
        .exists().withMessage('Gst Image is required')
        .notEmpty().withMessage('Gst Image is required'),

    body('panImage')
        .exists().withMessage('Gst Image is required')
        .notEmpty().withMessage('Gst Image is required'),

    body('companyName')
        .exists().withMessage('Company Name is required')
        .notEmpty().withMessage('Company Name is required'),

    body('Address')
        .exists().withMessage('Address is required')
        .notEmpty().withMessage('Address is required'),


]