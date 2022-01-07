const models  = require("../models")



exports.createPermissionSystemInfo = async (req,res)=> {

    const { systemInfo ,permissionId ,isActive } = req.body;
    const data  = await models.permissionSystemInfo.create({systemInfo ,permissionId ,isActive})

    if(!data){
        return res.status(401).json({
            messagae : "Failed to created Permission System Info"
        })
    }else{
        return res.status(201).json({
            messagae : "Permission System Info created successfully"
        })
    }
}