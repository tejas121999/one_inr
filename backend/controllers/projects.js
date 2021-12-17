const { sequelize } = require('../models');
const models = require('../models');
const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

//Creating Projects
exports.addProjects = async (req, res) => {
    try {
        let {
            userId,
            title,
            slogan,
            description,
            longDesc,
            videoLink,
            goal,
            commission,
            target,
            funded,
            startDate,
            endDate,
            recurringDays,
            status,
            displayOnHomeStatus,
            images
        } = req.body;
        recurringDays = recurringDays || 0;

        const projects = await models.projects.create({
            userId,
            title,
            slogan,
            description,
            longDesc,
            videoLink,
            goal,
            commission,
            target,
            funded,
            startDate,
            endDate,
            recurringDays,
            status,
            displayOnHomeStatus
        })

        projectId = projects.id
        images.map(image => {
            image.projectId = projectId
               })

        const pro_images = await models.project_images.bulkCreate(images)

        return res.status(200).json({projects, pro_images})
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err
        })
    }
}
