const jwt = require('jsonwebtoken');

//Creating JSON WEB TOKEN where it will take a user Id.
exports.generateJwtToken = (id) => {
    const token = jwt.sign({ id }, process.env.TOKEN_SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRES_TIME })
    return token;
}
exports.generateJwtTokenForOTP = (email, otp) => {
    const token = jwt.sign({ email, otp }, process.env.TOKEN_SECRET_KEY, { expiresIn: process.env.OTP_TOKEN_EXPRES_TIME })
    return token;
}


//Verifying JSON WEB TOKEN
exports.verifyJwtToken = (token) => {
    const decodedData = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    return decodedData;

}
//Verifying OTP in JSON WEB TOKEN
exports.verifyOtpToken = async (token) => {
    try {
        const decodedData = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
        return decodedData;
    } catch (err) {
        return { message: 'OTP Expired' };
    }
}