const models = require('../models')
const saltRounds = 10;
const twinBcrypt = require('twin-bcrypt')
const { generateJwtToken } = require('../utils/tokens')

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
    console.log(result)
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