const { body } = require("express-validator");
const models = require('../models')


exports.createVendorValidation = [
   
    body('name')
        .exists().withMessage('Name is Required')
        .notEmpty().withMessage('Name is Required'),

    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Email Required')
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
        .exists().withMessage('Phone number is Required')
        .notEmpty().withMessage('Phone number is Required')
        .custom(async (value) => {
            return await models.vendors.findOne({
                where: { phone: value }
            }).then(phone => {
                if (phone) {
                    return Promise.reject("Mobile Number Already Exists")

                }
            })
        }),
    body('gst')
        .exists().withMessage('GST is Required')
        .notEmpty().withMessage('GST is Required')
        .custom(async (value) => {
            return await models.vendors.findOne({
                where: { gst: value }
            }).then(gst => {
                if (gst) {
                    return Promise.reject("GST number Already Exists")

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
                    return Promise.reject("PAN number Already Exists")

                }
            })
        }),
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
