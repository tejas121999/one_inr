const models = require('../models')



exports.myProfile = async (req,res)=>{
    const id = req.userData.id
    const data  = await models.users.findOne({where : {id}})
    if(!data){
        res.status(400).json({
            message : "Failed to find user "
        })
    }
    res.status(200).json({
        message : "Success",
        data : data
    })
}