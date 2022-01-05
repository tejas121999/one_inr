const models = require('../models')



exports.createEntity = async (req,res) => {
    const { entityName, description, isActive } = req.body;

    const data = await models.entity.create({ entityName, description, isActive })

    if (!data) {
        return res.status(400).json({
            message: "Entity not created"
        })
    } else {

        return res.status(201).json({
            message: "Entity created successfully "
        })
    }
}