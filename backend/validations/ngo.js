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
        .isLength({ max: 10 })
        .isNumeric().withMessage('Landline number should be numeric')
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
        .isLength({ min: 5, max: 50 }).withMessage('Max length of emails is 50')
        .custom(async (value, { req }) => {
            const ngoData = await models.ngo.findOne({ where: { id: req.params.id } });
            return await models.users.findOne({
                where: {
                    id: { [Op.not]: ngoData.userId },
                    email: req.body.email
                }
            })
                .then(userEmail => {
                    if (userEmail) {
                        return Promise.reject("Email Already Exists!");
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
        .custom(async (value, { req }) => {
            const ngoData = await models.ngo.findOne({ where: { id: req.params.id } });
            return await models.users.findOne({
                where: {
                    id: { [Op.not]: ngoData.userId },
                    mobile: req.body.mobile
                }
            })
                .then(userMobile => {
                    if (userMobile) {
                        return Promise.reject("Mobile Number Already Exists!");
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
        .isLength({ max: 10 })
        .isNumeric().withMessage('Landline number should be numeric')
        .custom(async (value, { req }) => {

            return await models.ngo.findOne({
                where: {
                    id: { [Op.not]: req.params.id },
                    landline: req.body.landline
                }
            }).then(ngoLandline => {
                if (ngoLandline) {
                    return Promise.reject("Landline Number Already Exists!");
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
        .custom(async (value, { req }) => {

            return await models.ngo.findOne({
                where: {
                    id: { [Op.not]: req.params.id },
                    panNumber: req.body.panNumber
                }
            }).then(ngoPAN => {
                if (ngoPAN) {
                    return Promise.reject("PAN Number Already Exists!");
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

// exports.ngoBankDetailsValidation = [

//     body('bankName')
//         .exists().withMessage('Bank Name is required')
//         .notEmpty().withMessage('Bank Name is required'),

//     body('accountNumber')
//         .exists().withMessage('Account Number required')
//         .notEmpty().withMessage('Account Number cannot be empty')
//         // .custom((val) => /^(?:[0-9]{11}|[0-9]{2}-[0-9]{3}-[0-9]{6})$/g.test(val))
//         // .withMessage("Invalid Number")\
//         .isLength({min : 8 ,max :16}).withMessage('Please check account number correctly')
//         .isNumeric().withMessage('Please enter only numbers...'),

//     // body('accountNumber')
//     //     .exists().withMessage('Account Number required')
//     //     .notEmpty().withMessage('Account Number is required')
//     //     .custom(async value => {
//     //         if(!/^[0-9]{4}[-][0-9]{4}[-][0-9]{4}[-][0-9]{4}$/i.test(value)) {
//     //             return Promise.reject("Invalid Account Number...")
//     //         }
//     //     })
//     //     .custom(async value => {
//     //         return await models.ngoBankDetailsValidation.findOne({
//     //             where: {
//     //                 accountNumber: value,
//     //             }
//     //         }).then(accountNumber => {
//     //             if(accountNumber) {
//     //                 return Promise.reject("Account Number alredy exists!");
//     //             }
//     //         })
//     //     }),

//     body('beneficiaryName')
//         .exists().withMessage('Beneficiary Name is required')
//         .notEmpty().withMessage('Beneficiary Name is required'),

//     body('ifsc')
//         .exists().withMessage('IFSC is required')
//         .notEmpty().withMessage('IFSC is required')
//         .custom(async value => {
//             if(!/^([A-Z|a-z]){4}[0]([a-zA-Z0-9]){6}$/i.test(value)) {
//                 return Promise.reject("Invalid IFSC number");
//             }
//         })
//         .custom(async value => {
//             return await models.ngoBankDetailsValidation.findOne({
//                 where: {
//                     IFSC: value,
//                 }
//             }).then(IFSC => {
//                 if(IFSC) {
//                     return Promise.reject("IFSC number already exists");
//                 }
//             })
//         })
// ]

