const { body } = require('express-validator');


const models = require('../models');
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;

exports.ngoValidation = [


    body('name')
        .exists().withMessage('Name is Required.')
        .notEmpty().withMessage('Name is Required.')
        .matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic'),

    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Invalid Email')
        .isLength({ min: 5, max: 50 }).withMessage('Max length of emails is 50')
        .custom(async (value) => {
            return await models.users.findOne({
                where: {
                    email: value
                }
            }).then(email => {
                if (email) {
                    return Promise.reject("Email Already Exists")

                }
            })
        }),

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
                    return Promise.reject("Mobile Number Already Exist")
                }
            })
        }),

    body('password')
        .exists().withMessage('Password is required.')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8, max: 15 }).withMessage("Min password length is 8"),

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

    body('registrationDate')
        .exists().withMessage('Registration Date is required')
        .notEmpty().withMessage('Registration Date is required'),


    body('registrationNumber')
        .exists().withMessage('Registration Number is required')
        .notEmpty().withMessage('Registration Number is required')
        .isLength({ min: 12 }).withMessage('Min length registration number is 12'),

    body('landline')
        .custom(async (value) => {
            return await models.ngo.findOne({
                where: { landline: value }
            }).then(phone => {
                if (phone) {
                    return Promise.reject("Landline number already exist")
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
                    return Promise.reject("Pan number already exists");
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


]

exports.ngoUpdateValidation = [
    body('name')
        .exists().withMessage('Name is Required.')
        .notEmpty().withMessage('Name is Required.')
        .matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic'),

    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Invalid Email')
        .isLength({ min: 5, max: 50 }).withMessage('Max length of emails is 50'),
        // .custom(async (value, { req }) => {
            
        //     return await models.users.findOne({
        //         where: {
        //             email: req.body.email,
        //            id: { [Op.not]: req.params.id }
        //         }
        //     }).then(userEmail => {
        //         if (userEmail) {
        //             console.log(userEmail.dataValues)
        //             return Promise.reject("Email Already Exists!");
        //         }
        //     })
        // }),

    body('mobile')
        .exists().withMessage('Mobile is Required')
        .notEmpty().withMessage('Mobile is Required')
        .custom(async value => {
            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Invalid mobile number");
            }
        }),
       

    body('password')
        .exists().withMessage('Password is required.')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8, max: 15 }).withMessage("Min password length is 8"),

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
            }).then(ngoLandline => {
                if (ngoLandline) {
                    return Promise.reject("landline number already exist.")
                }
            })
        }),
        // .custom(async (value, { req }) => {
        //         return await models.ngo.findOne({
        //             where: {
        //                 landline: req.body.landline,
        //                 id: { [Op.not]: req.params.id }
        //             }
        //         }).then(ngoLandline => {
        //             if (ngoLandline) {
        //                 return Promise.reject("Landline Already Exists!");
        //             }
        //         })
        //     }),

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
                    return Promise.reject("Pan number already exists");
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

]

