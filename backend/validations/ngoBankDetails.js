// const { body, check } = require('express-validator');

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
//             if(!/^([A-Z|a-z]){4}[0]([a-zA-Z0-9]){7}$/i.test(value)) {
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