const jwt = require('jsonwebtoken');





//Creating JSON WEB TOKEN where it will take a user Id.
exports.generateJwtToken =(id) => {
    const token = jwt.sign({id},process.env.TOKEN_SECRET_KEY,{expiresIn: process.env.TOKEN_EXPIRES_TIME})
    return token;
}

//Verifying JSON WEB TOKEN
exports.verifyJwtToken = (token)=>{
    const decodedData = jwt.verify(token,process.env.TOKEN_SECRET_KEY)
    

}