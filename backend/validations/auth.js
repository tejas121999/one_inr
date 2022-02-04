const { body } = require("express-validator");


exports.loginValidation = [
    body('email')
        .exists().withMessage('Email Id is required')
        .notEmpty().withMessage('Email Id is required')
        .isEmail().withMessage('Email is Invalid')
        .isLength({ min: 3, max: 64 }).withMessage('Min 3 character and Max 64 characters'),

    body('password')
        .exists().withMessage("Password is Required")
        .notEmpty().withMessage("Password is Required")
        .isLength({ min: 4 }).withMessage("Min password length is 4"),
]

exports.userRegisterValidation = [

    body('name')
        .exists().withMessage('Name is Required')
        .notEmpty().withMessage('Name is Required')
        .matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic'),

    body('email')
        .exists().withMessage('Email is Required')
        .notEmpty().withMessage('Email is Required')
        .isEmail().withMessage('Email is Required')
        .isLength({ min: 5, max: 50 }).withMessage('Max length of emails is 50')
    // .custom(async (value) => {
    //     return await models.users.findOne({
    //         where: {
    //             email: value
    //         }
    //     }).then(email => {
    //         if (email) {
    //             return Promise.reject("Email Already Exists")

    //         }
    //     })
    // })
    ,
    body('mobile')
        .exists()
        .withMessage('Mobile number is Required')
        .isNumeric().withMessage('Please type only Numbers in Mobile')
        .custom(async value => {

            if (!/^[0-9]{10}$/i.test(value)) {
                return Promise.reject("Invalid mobile number");
            }

        })
    // .custom(async value => {
    //     return await models.users.findOne({
    //         where: {
    //             mobile: value,
    //         }
    //     }).then(mobile => {
    //         if (mobile) {
    //             return Promise.reject("Mobile Number Already Exists!");
    //         }
    //     })
    // })
    ,
    body('password')
        .exists().withMessage("Passoword is Required")
        .notEmpty().withMessage("Password is Required")
        .isLength({ min: 8, max: 15 }).withMessage("Min password length is 8"),
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