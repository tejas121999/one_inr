const models = require('../../models')
const bcrypt = require('bcrypt')


exports.userLogin = async(req,res)=>{
    const {email,password}= req.body;

    let userData = await models.users.findOne({where : {email : email}})
    if (!userData) {
        return res.status(400).json({
            message: "User does not exists"
        })
    }
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);

    
    console.log(userData.dataValues.password)
    console.log(await bcrypt.compare(password, userData.dataValues.password))
    if (!(await bcrypt.compareSync(password, userData.dataValues.password))) {
        return res.status(400).json({
            message: "Password is incorrect"
        })
    }
    return res.status(200).json({
        message : "Password is Correct"
    })
     
}