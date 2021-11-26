const { body } = require("express-validator");
const models = require('../models')
const sequelize = models.Sequelize;
const Op = sequelize.Op;

exports.donorValidation = [

    body('name')
        .exists().withMessage('Name is Required')
        .notEmpty().withMessage('Name is Required'),

    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Rrequired')
        .isEmail().withMessage('Email is Required')
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
        .exists()
        .withMessage('Mobile number is Required')
        .custom(async value => {

            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Invalid mobile number");
            }

        })
        .custom(async value => {
            return await models.users.findOne({
                where: {
                    mobile: value,
                }
            }).then(mobile => {
                if (mobile) {
                    return Promise.reject("Mobile Number Already Exists!");
                }
            })
        }),
    body('password')
        .exists().withMessage("Passoword is Required")
        .notEmpty().withMessage("Password is Required")
        .isLength({ min: 8 }).withMessage("Min password length is 8"),
    body('parentId')
        .custom(async (value) => {
            if (value > 0) {

                return await models.users.findOne({
                    where: { id: value }
                }).then(result => {
                    if (!result) {
                        return Promise.reject("Parent Not Found")
                    }
                })

            }
        })

]
exports.updateDonorValidation = [
    body('name')
        .exists().withMessage('Name is Required')
        .notEmpty().withMessage('Name is Required'),
    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Rrequired')
        .isEmail().withMessage('Email is Required'),
    body('mobile')
        .exists()
        .withMessage('Mobile number is Required')
        .custom(async value => {

            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Invalid mobile number");
            }
                
        }),
    body('parentId')
        .custom(async (value) => {
            if (value > 0) {

                return await models.users.findOne({
                    where: { id: value }
                }).then(result => {
                    if (!result) {
                        return Promise.reject("Parent Not Found")
                    }
                })
            }
        }),
    body('plan')
        .exists().withMessage('Plan is Required')
        .notEmpty().withMessage('Plan is Required'),
    body('balanceNextRenewDate')
        .exists().withMessage('Renew Date is Required')
        .notEmpty().withMessage('Renew Date is Required')

]

exports.updateDonorBalanceValidation = [
    body('balance')
    .exists().withMessage('Balance is Required')
    .isNumeric().withMessage('Please type a numberic value')
]