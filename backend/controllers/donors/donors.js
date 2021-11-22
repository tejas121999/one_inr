const models = require('../../models/index')

//Get all details of all donor in DB
exports.getAllDonor = async (req, res) => {
    const data = await models.users.findAndCountAll({})
    if (data) {
        return res.status(200).json({
            data: data,
            message: "Success",

        })
    }
}
//Get api for getting parent details 
exports.getAllParentDetails = async (req,res)=>{
    const data = await models.users.findAll({
        attributes : ['name','id'] 
        
    })
    if(!data){
        return res.status(400).json({message : "Failed to get parent details"})
    }
    else{
        return res.status(200).json({
            data : data
        })
    }
}