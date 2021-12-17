const models = require('../models');
const { generateJwtTokenForOTP } = require('../utils/tokens')
const  sendEmail = require('../utils/sendEmail')


let sendForgotPasswordMail = async (email) => {
  try {
    //Generating OTP to send mail
    const otp = Math.floor(1000 + Math.random() * 9000);
    //storing email id and otp in token and storing in rember_token column in user table.
    const token = generateJwtTokenForOTP(email, otp)
    //updating new remember_token in models which will have a OTP in it.
    const updateRememberToken = await models.users.bulkCreate([{rememberToken : token}], { updateOnDuplicate: ['email'] }).then(()=> { return models.users.update({rememberToken : token},{where : {email:email}})})

    // const updateOTP = await models
    let message = `Hi ${email}, Your OTP to reset your password is ${otp}.`

    let options = {
      email: email,
      subject: "Reset Password",
      otp: otp,
      message: message
    }
    await sendEmail(options);
    return {
      success: true,
      Message: "Email send please check otp in your email"
    }

  } catch (err) {
    console.log(err);
    return { isSuccess: false };
  }
};

module.exports = {
  forgotPasswordMailService: sendForgotPasswordMail,
};