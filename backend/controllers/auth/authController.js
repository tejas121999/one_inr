const models = require('../../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const twinBcrypt = require('twin-bcrypt')


//I am using twinBcrypt instead of bcrypt because its a migration project from php to node, where the password of every user has a prefix of $2y$ in the MySql DB.and twinbcrypt uses $2y$ prefix for encryption.
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    let userData = await models.users.findOne({ where: { email: email } })
    if (!userData) {
        return res.status(400).json({
            message: "User does not exists"
        })
    }

    // const round = await twinBcrypt.getRounds(userData.dataValues.password)
    // console.log(`rounds is `,round)
    // console.log(`user email is `,userData.dataValues.email)
    // console.log(`input password is `,password)
    const result = await twinBcrypt.compareSync(password, userData.dataValues.password);
    console.log(result)
    if(result == true){
        return res.status(200).json({
            message: "Password is Correct"
        })
    }
   

}
exports.userRegister = async (req, res) => {
    let { name, email, mobile, role_id, password , parentId,isPriyank} = req.body

    const hash = await twinBcrypt.hashSync(password, saltRounds);

    let userData = await models.users.create({ name, email, mobile, role_id, password: hash ,parentId,isPriyank})
    if (!userData) {
        res.status(401).json({
            success: false,
            message: "Failed to create a User"
        })
    }
    else {
        res.status(200).json({
            success: true,
            message: "User Created Successfully",
        })
    }


}