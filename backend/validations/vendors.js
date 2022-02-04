const { body } = require("express-validator");
const models = require('../models')


exports.createVendorValidation = [

    body('name')
        .exists().withMessage('Vendor Name is Required')
        .notEmpty().withMessage('Vendor Name is Required')
        .isLength({ max: 50 }).withMessage('Only 50 characters allowed'),

    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Email Required')
        .isLength({ max: 50 }).withMessage('Max length of email is 50')
        .custom(async (value) => {
            return await models.vendors.findOne({
                where: { email: value }
            }).then(email => {
                if (email) {
                    return Promise.reject("Email Already Exists")

                }
            })
        }),
    body('phone')
        .exists().withMessage('Mobile Number is Required')
        .notEmpty().withMessage('Mobile Number is Required')
        .isLength({ min: 10 }).withMessage('Invalid Mobie Number')
        .custom(async value => {
            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Mobile Number should be numeric");
            }
        })

        .custom(async (value) => {
            return await models.vendors.findOne({
                where: { phone: value }
            }).then(phone => {
                if (phone) {
                    return Promise.reject("Mobile number already exist")

                }
            })
        }),
    body('gst')
        .exists().withMessage('GST Number is Required')
        .notEmpty().withMessage('GST Number is Required')
        .custom(async (value) => {
            return await models.vendors.findOne({
                where: { gst: value }
            }).then(gst => {
                if (gst) {
                    return Promise.reject("GST Number Already Exists")

                }
            })
        }),
    body('pan')
        .exists().withMessage('PAN is Required')
        .notEmpty().withMessage('PAN is Required')
        .custom(async (value) => {
            return await models.vendors.findOne({
                where: { pan: value }
            }).then(pan => {
                if (pan) {
                    return Promise.reject("PAN Number Already Exists")

                }
            })
        }),


    body('address')
        .exists().withMessage('Address is Required')
        .notEmpty().withMessage('Address is Required')
        .isLength({ max: 100 }).withMessage('Only 100 characters allowed')
        .custom(async (value) => {
            let addressRegex = /^[a-zA-Z0-9\s,./'-\(\)\-]{0,}$/g
            if (!addressRegex.test(value)) {
                return Promise.reject(`Address cannot have special characters like @,$,%,!,",^`)
            }
        }),

    body('company')
        .exists().withMessage('Company Name is Required')
        .notEmpty().withMessage('Company Name is Required')
        .isLength({ max: 50 }).withMessage('Only 50 characters allowed'),



]
exports.updateVendorValidation = [
    body('name')
        .exists().withMessage('Vendor Name is Required')
        .notEmpty().withMessage('Vendor Name is Required')
        .isLength({ max: 50 }).withMessage('Only 50 characters allowed'),
    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Email Required')
        .isLength({ max: 50 }).withMessage('Max length of email is 50'),

    body('phone')
        .exists().withMessage('Mobile Number is Required')
        .notEmpty().withMessage('Mobile Number is Required')
        .isLength({ min: 10 }).withMessage('Invalid Mobie Number')
        .custom(async value => {
            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Mobile Number should be numeric");
            }
        }),

    body('gst')
        .exists().withMessage('GST Number is Required')
        .notEmpty().withMessage('GST Number is Required'),

    body('pan')
        .exists().withMessage('PAN is Required')
        .notEmpty().withMessage('PAN is Required')
        .custom(async (value) => {
            return await models.vendors.findOne({
                where: { pan: value }
            }).then(pan => {
                if (pan) {
                    return Promise.reject("PAN Number Already Exists")

                }
            })
        }),

    body('address')
        .exists().withMessage('Address is Required')
        .notEmpty().withMessage('Address is Required')
        .isLength({ max: 100 }).withMessage('Only 100 characters allowed')
        .custom(async (value) => {
            let addressRegex = /^[a-zA-Z0-9\s,./'-\(\)\-]{0,}$/g
            if (!addressRegex.test(value)) {
                return Promise.reject(`Address cannot have special characters like @,$,%,!,",^`)
            }
        }),
    body('company')
        .exists().withMessage('Company Name is Required')
        .notEmpty().withMessage('Company Name is Required')
        .isLength({ max: 50 }).withMessage('Only 50 characters allowed'),
    body('panImage')
        .exists().withMessage('Pan image is Required')
        .notEmpty().withMessage('Pan image is Required'),
    body('gstImage')
        .exists().withMessage('GST image is Required')
        .notEmpty().withMessage('GST image is Required'),
]