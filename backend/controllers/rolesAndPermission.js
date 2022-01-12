const models = require('../models')

exports.createRole = async (req,res)=>{
    const { roleName,description,isActive,} = req.body;
    const createdBy = req.userData.id
    const updatedBy = req.userData.id

    const data  = await models.role.create({roleName,description,isActive,createdBy,updatedBy})
    if(!data){
        res.status(400).json({message : "Failed to create Roles"})

    }else{
        res.status(201).json({message : "Roles created successfully "})
    }
}


exports.createRoleswithPermission = async (req,res) => {
    const {permissions,roleId} = req.body;
    const data  = await models.rolePermission.create({
        permissions, roleId
    }) 
    if(!data){
        return res.status(401).json({message : " Failed to Add permission"})
    }else {
        return  res.status(201).json({message : "Permisssion added successfully "})
    }
}

exports.getRoles = async (req,res)=>{
    const data = await models.role.findAll({
        attributes : ['id','roleName']
    })
    
    if (!data) {
        return res.status(400).json({ message: "Failed to get roles" })
    }
    else {
        return res.status(200).json({
            data: data,
            message : "Success."
        })
    }

}