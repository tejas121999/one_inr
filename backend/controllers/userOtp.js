const models = require('../models');
const { paginationWithFromTo } = require('../utils/pagination')
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;
const moment = require('moment');
const cron = require('node-cron')
const check = require('../lib/checkLib');
const uuid = require('uuid-random')


// exports.protypesendOtp = async (req, res, next) => {
//     const { mobile, type } = req.body;
//     let userDetails = await models.users.findOne({ where: { mobileNumber } });
//     if (userDetails) {
//         // let otp = Math.floor(1000 + Math.random() * 9000);
//         let otp = 1234;
//         const referenceCode = await uuid();
//         let createdTime = moment(new Date());
//         let expiryTime = moment.utc(createdTime).add(10, 'm');

//         await sequelize.transaction(async t => {
//             await models.userOtp.destroy({ where: { mobileNumber }, transaction: t })
//             await models.userOtp.create({ mobileNumber, otp, createdTime, expiryTime, referenceCode }, { transaction: t })
//         })


//         let message = await `Dear customer, Your OTP for completing the order request is ${otp}.`
//         await sms.sendSms(mobileNumber, message);


//         return res.status(200).json({ message: 'Otp send to your Mobile number.', referenceCode: referenceCode });

//     } else {
//         res.status(400).json({ message: 'User does not exists, please contact to Admin' });
//     }
// }

exports.sendOtp = async (req, res) => {

    const { mobile } = req.body
    let data = await models.users.findOne({ where: {mobile} })
    

    if (data) {
        // let otp = Math.floor(1000 + Math.random() * 9000);
        let otp = 1234;
        const referenceCode = await uuid();
        let createdTime = moment(new Date());
        let expiryTime = moment.utc(createdTime).add(10, 'm');  // set expiry time 10 minss

        await sequelize.transaction(async t => {
            await models.userOtp.destroy({ where: { mobile }, transaction: t })
            await models.userOtp.create({ mobile, otp, expiryTime, referenceCode }, { transaction: t })
            return res.status(200).json({ message: 'Otp added to your db.', referenceCode: referenceCode });
        })


    } else {
        return res.status(400).json({ message: 'Mobile does not exists' });
    }
}

