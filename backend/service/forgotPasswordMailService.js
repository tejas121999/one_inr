const models = require('../models');
const moment = require('moment');

let sendForgotPasswordMail = async (email, name, to) => {
  try {
    let checkUser = await models.users.findOne({where : {email}})

    const uniqueId = await Math.floor(1000 + Math.random() * 9000);
    const updateOTP = await models.
    let message =  `Hi ${email}, Your OTP to reset your password is ${uniqueId} `
    await sendEmail(
    );
    await models.users.update(
      {
        forget_id: uniqueId,
      },
      {
        where: { id: id },
      }
    );
    return { isSuccess: true };
  } catch (err) {
    return { isSuccess: false };
  }
};

module.exports = {
  forgotPasswordMailService: sendForgotPasswordMail,
};