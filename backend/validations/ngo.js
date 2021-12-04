const { body } = require('express-validator');
const { isNumeric } = require('../lib/checkLib');
const models = require ('../models');

exports.ngoValidation = [

    body('address')
        .exists().withMessage('Address is required')
        .notEmpty().withMessage('Address is required'),

    body('registrationDate')
        .exists().withMessage('Registration Date is required')
        .notEmpty().withMessage('Registration Date is required'),

    body('registrationNumber')
        .exists().withMessage('Registration Number is required')
        .notEmpty().withMessage('Registration Number is required'),

    body('landline')
    .exists().withMessage('landline number is Required')
    .notEmpty().withMessage('landline Number is required')
    .custom(async (value) => {
        return await models.vendors.findOne({
            where: { phone: value }
        }).then(phone => {
            if (phone) {
                return Promise.reject("landline Number Already Exists")

            }
        })
    }),

    body('contacts')
    .exists().withMessage('Mobile number is Required')
    .notEmpty().withMessage('Mobile Number is required')
    .custom(async (value) => {
        return await models.vendors.findOne({
            where: { phone: value }
        }).then(phone => {
            if (phone) {
                return Promise.reject("Mobile Number Already Exists")

            }
        })
    }),

    body('bankDetails')
        .exists().withMessage('Bank Details is required')
        .notEmpty().withMessage('Bank Details is required'),

    body('panCard')
        .exists().withMessage('PAN Card is required')
        .notEmpty().withMessage('PAN Card is required'),

    body('panNumber')
        .exists().withMessage('Pan Number is required')
        .notEmpty().withMessage('Pan Number is required')
        .custom(async value => {
            if(!/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/i.test(value)) {
                return Promise.reject("invalid pan number");
            }
        })
        .custom(async value => {
            return await models.ngo.findOne({
                where: {
                    panNumber: value,
                }
            }).then(panNumber => {
                if(panNumber) {
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

    body('dead')
        .exists().withMessage('dead is required')
        .notEmpty().withMessage('dead is required'),

    body('logo')
        .exists().withMessage('Logo Image is required')
        .notEmpty().withMessage('Logo Image is required'),

    body('signature')
        .exists().withMessage('Signature is required')
        .notEmpty().withMessage('Signature is required'),

    body('isKyc')
        .exists().withMessage('KYC is required')
        .notEmpty().withMessage('KYC is required'),
]



