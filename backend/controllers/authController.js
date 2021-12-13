const models = require('../models')
const saltRounds = 10;
const twinBcrypt = require('twin-bcrypt')
const { generateJwtToken, verifyJwtToken, verifyOtpToken } = require('../utils/tokens')
const { forgotPasswordMailService } = require('../service/forgotPasswordMailService')

//I am using twinBcrypt instead of bcrypt because its a migration project from php to node, where the password of every user has a prefix of $2y$ in the MySql DB.and twinbcrypt uses $2y$ prefix for encryption.
//User Login 
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    let userData = await models.users.findOne({ where: { email: email } })
    if (!userData) {
        return res.status(400).json({
            message: "User does not exists"
        })
    }
    let id = userData.dataValues.id

    const result = await twinBcrypt.compareSync(password, userData.dataValues.password);
    if (result == false) {
        return res.status(401).json({
            message: "Wrong Credentials."
        })
    }
    const token = generateJwtToken(id)

    const remember_token = await models.users.update({ rememberToken: token }, { where: { id: id } })

    if (token) {
        return res.status(201).json({
            message: "User login successful",
            Token: token,
        })
    }



}



//User Register 
//Creating a Donor 
exports.userRegister = async (req, res) => {
    let { name, email, mobile, role_id, password, parentId, isPriyank } = req.body

    const hash = await twinBcrypt.hashSync(password, saltRounds);

    let userData = await models.users.create({ name, email, mobile, role_id, password: hash, parentId, isPriyank })
    if (!userData) {
        return res.status(401).json({
            message: "Failed to create a user"
        })
    }
    else {
        return res.status(200).json({
            message: "User created successfully",
        })
    }


}


exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    let checkUser = await models.users.findOne({
        where: { email }
    });
    if (!checkUser) {
        return res.status(400).json({
            successs: false,
            message: "User not found "
        })
    }
    else {
        var sendForgotPasswordMail = await forgotPasswordMailService(email)
    }

    if (sendForgotPasswordMail.success == true) {
        return res.status(200).json({
            message: sendForgotPasswordMail.Message
        })
    } else {
        return res.status(400).json({
            message: "Error in Sending Mail."
        })
    }
}
exports.validateOtp = async (req, res) => {
    const { email, otp } = req.body;

    const findRememberToken = await models.users.findOne({ where: { email: email } })
    if (!findRememberToken) {
        return res.status(400).json({
            message: "Email Not Found"
        })
    }
    let data = await verifyOtpToken(findRememberToken.rememberToken);

    if (data.message) {
        return res.status(406).json({ message: data.message })
    }
    //comparing OTP from fromEnd and Otp in DB.
    if (otp == data.otp) {
        return res.status(201).json({
            messsage: 'working '
        })

    } else {
        return res.status(406).json({
            message: "Please enter correct OTP."
        })
    }
}
exports.changePassword = async (req,res) => {
    const {email,password,otp} = req.body;

    //OTP Cross Check
    const findRememberToken = await models.users.findOne({ where: { email: email } })
    if (!findRememberToken) {
        return res.status(400).json({
            message: "Email Not Found"
        })
    }
    let data = await verifyOtpToken(findRememberToken.rememberToken);
    if (data.message) {
        return res.status(406).json({ message: data.message })
    }
    //comparing OTP from fromEnd and Otp in DB.

    if (!(otp == data.otp)) {
        return res.status(406).json({
            message: "Please enter correct OTP."
        })

    } 

    const hash = await twinBcrypt.hashSync(password, saltRounds);

    const updatePassword = await models.users.bulkCreate([{password : hash}], { updateOnDuplicate: ['password'] }).then(()=> { return models.users.update({password : hash},{where : {email:email}})})
    if(!updatePassword[0]){
        return res.status(400).json({
            message : "Password Reset Failed."
        })
    }
    return res.status(200).json({message : "Password Reset Successful."})
 
}