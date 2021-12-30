const models = require('../models')
const sequelize = models.Sequelize;


exports.addConfigSetting = async (req, res) => {
    let { name, value } = req.body;

    let config = await models.configs.create({ name, value })
    if (!config) {
        return res.status(400).json({ message: 'Bad Request' });
    }
    return res.status(200).json({ message: 'Settings Created', result: config })
}

exports.getConfigSetting = async (req, res) => {

    let config = await models.configs.findAll()
    if (!config) {
        return res.status(404).json({ message: 'Data Not found' })
    }
    return res.status(200).json({ message: 'Config Settings', result: config })
}

exports.updateConfigSetting = async (req,res)=>{
    let id = req.params.id;
    let config = await models.configs.findOne({where: { id: id}})

    if(!config){
        return res.status(404).json({message: 'Not found'});
    }

    let configsData = await models.configs.update({
        name : req.body.name,
        value : req.body.value
    },
    {where : { id: id}}
    )

    if(!configsData){
        return res.status(400).json({message: 'Failed to update config'})
    }else{
        return res.status(200).json({message:"Config Settings Updated"})
    }
}
