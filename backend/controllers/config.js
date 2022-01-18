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

exports.updateConfigSetting = async (req, res) => {
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

