const models = require('../models')


exports.addConfigSetting = async (req, res) => {
    let { name, value } = req.body;

    let config = await models.configs.create({ name, value })
    if (!config) {
        return res.status(400).json({ message: 'Bad Request' });
    }
    return res.status(201).json({ message: 'Settings Created', result: config })
}

exports.getConfigSetting = async (req, res) => {

    let config = await models.configs.findAll()
    if (!config) {
        return res.status(404).json({ message: 'Data Not found' })
    }
    return res.status(200).json({ message: 'Config Settings', result: config })
}

exports.configSetting = async (req, res) => {
    let { name, value } = req.body;

    let config = await models.configs.findOne({ where: { name } })
    if (!config) {
        return res.status(404).json({ message: 'Not found' });
    }

    let configsData = await models.configs.update({ value },
        { where: { name: name } })

    if (name == 'home_project') {
        let pro = await models.projects.update({ displayOnHomeStatus: 0 }, { where: { displayOnHomeStatus: 1 } })
        let project = await models.projects.update({ displayOnHomeStatus: 1 }, { where: { id: value } })
        return res.status(200).json({ result: configsData, data: project, pro: pro })
    }

    if (!configsData) {
        return res.status(400).json({ message: 'Failed to update config' })
    } else {
        return res.status(200).json({ message: "Config Settings Updated" })
    }
}


async function findAndUpdateConfig(data, value) {
    let update = await models.configs.update({ value }, { where: { name: data } })
    if (!update[0]) {
        return false
    } else {
        return true;
    }
}
exports.updateConfig = async (req, res) => {
    let { commission, feature_commision, gst, payment_gateway_name, payment_gateway_percentage } = req.body;
    let data;
    if (req.body.commission) {
        data = await findAndUpdateConfig('commission', commission)
    } else if (req.body.feature_commision) {
        data = await findAndUpdateConfig('feature_commision', feature_commision)
    } else if (req.body.gst) {
        data = await findAndUpdateConfig('gst', gst)
    } else if (req.body.payment_gateway_name) {
        data = await findAndUpdateConfig('payment_gateway_name', payment_gateway_name)
    } else if (req.body.payment_gateway_percentage) {
        data = await findAndUpdateConfig('payment_gateway_percentage', payment_gateway_percentage)
    }
    //   else if (req.body.home_project) {
    //     let pro = await models.projects.update({ displayOnHomeStatus: 0 }, { where: { displayOnHomeStatus: 1 } })
    //     let project = await models.projects.update({ displayOnHomeStatus: 1 }, { where: { id: value } })
    //     return res.status(200).json({ result: configsData, data: project, pro: pro })
    // }
    else if (true) {
        return res.status(400).json({ message: "Failed To Update Configs." })
    }
    if (data) {
        return res.status(201).json({ message: `Configs Updated Successfully.` })
    } else {
        return res.status(400).json({ message: 'Failed to Update Config.' })
    }
}

exports.findAllProjects = async (req,res) => {
    let data = await models.projects.findAll({where : {status : true},attributes : ['id','title']})
    if(!data){
        return res.status(400).json({message :"Failed to get All Projects"})
    }else{
        return res.status(200).json({message :"Success",data})
    }
}
