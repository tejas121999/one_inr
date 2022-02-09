const { body } = require("express-validator");
const models = require('../models')


exports.partnerValidation = [

    body('name')
        .exists().withMessage('Name is Required')
        .notEmpty().withMessage('Name is Required')
        .isLength({ max: 50 }).withMessage('Only 50 characters allowed'),

    body('phone')
        .exists().withMessage('Mobile is Required')
        .notEmpty().withMessage('Mobile is Required')
        .isLength({ min: 10 }).withMessage('Invalid Mobie Number')
        .custom(async value => {
            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Mobile Number should be numeric");
            }
        }),
    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Invalid Email')
        .isLength({ min: 5, max: 50 }).withMessage('Max length of emails is 50')
        .custom(async (value) => {
            return await models.partners.findOne({
                where: { email: value },
                
            }).then(email => {
                if (email) {
                    return Promise.reject("Email Already Exists")

                }
            })
        }),

    body('gstNumber')
        .exists().withMessage('Gst Number is required')
        .notEmpty().withMessage('Gst Number is required')
        .custom(async (value) => {
            return await models.partners.findOne({
                where: { gstNumber: value }
            }).then(gstNumber => {
                if (gstNumber) {
                    return Promise.reject("GST Number Already Exists")

                }
            })
        }),

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
                    return Promise.reject("Pan number already exists");
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
        .notEmpty().withMessage('Company Name is required')
        .isLength({ max: 50 }).withMessage('Only 50 characters allowed'),

    body('Address')
        .exists().withMessage('Address is Required')
        .notEmpty().withMessage('Address is Required')
        .isLength({ max: 100 }).withMessage('Only 100 characters allowed')
        .custom(async (value) => {
            let addressRegex = /^[a-zA-Z0-9\s,./'-\(\)\-]{0,}$/g
            if (!addressRegex.test(value)) {
                return Promise.reject(`Address cannot have special characters like @,$,%,!,",^`)
            }
        }),

]