const models = require('../models')



exports.createPermission = async (req, res) => {
    
    const { actionName, description, entityId, isActive } = req.body;
    const data = await models.permission.create({ actionName, description, entityId, isActive })

    if (!data) {
        return res.status(400).json({
            message: "Permission not created"
        })
    } else {

        return res.status(201).json({
            message: "Permission created successfully "
        })
    }
}