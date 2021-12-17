const { sequelize } = require('../models');
const models = require('../models');
const {paginationWithFromTo} = require('../utils/pagination')
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



exports.getAllProjects = async (req, res) => {
    const { search, offset, pageSize } = paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    );
    // let query = {};
    // const searchQuery = {
    //     [Op.and]: [query, {
    //         [Op.or]: {
    //             name: { [Op.like]: search + "%" },
    //             email: { [Op.like]: search + '%' },
    //             phone: { [Op.like]: search + '%' },
    //             gst: { [Op.like]: search + '%' },
    //             address : {[Op.like]: search + '%'},
    //             pan: { [Op.like]: search + '%' },
    //             company: { [Op.like]: search + '%' },
    //         }
    //     }],
    // };
    const project = await models.projects.findAll({
        
        offset : offset,
        limit : pageSize
    });
    if(!project) {
        return res.status(400).json({message : "No data Found"})
    }else{
        return res.status(200).json({message : "All Projects", result : project})
    }
}