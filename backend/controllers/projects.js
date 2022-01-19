const models = require('../models');
const { paginationWithFromTo } = require('../utils/pagination')
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;
const moment = require('moment');

//Creating Projects
exports.addProjects = async (req, res) => {
        let {userId,title,slogan,description,longDesc,videoLink,goal,commission,target,funded,startDate,endDate,recurringDays,status,displayOnHomeStatus} = req.body;
        recurringDays = recurringDays || 0;

        const configData = await models.configs.findAll();
        let gst;
        let pg;
        
        await configData.map(ele => {
            if (ele.dataValues.name === 'commission') {
                commission = ele.dataValues.value;
            } if (ele.dataValues.name === 'gst') {
                gst = ele.dataValues.value;
            } if (ele.dataValues.name === 'payment_gateway_percentage') {
                pg = ele.dataValues.value;
            }
        });

        // if(req.body.commission==undefined || req.body.commission ==null){
        //     commission = 
        // }

        let commissionModel;
        // let gstCal;
        // let pgCal;

        if (req.body.commission == null) {
            commissionModel = (Number(commission) * goal) / 100;
        } else {
            commissionModel = (Number(commission) * goal) / 100;
        }
        let gstCal = (commissionModel * gst) / 100;
        let pgCal = (Number(goal) + commissionModel) * pg / 100;
        target = Number(goal) + Number(commissionModel) + Number(gstCal) + Number(pgCal);

        let projects;
        await sequelize.transaction(async (t) => {
         projects = await models.projects.create({userId,title,slogan,description,longDesc,videoLink,goal,commission,target,funded,startDate,endDate,recurringDays,status,displayOnHomeStatus},
            { transaction: t }
            )
        })

        // projectId = projects.id
        // images.map(image => {
        //     image.projectId = projectId
        // })
        // const pro_images = await models.project_images.bulkCreate(images)
        return res.status(201).json({ message: "Success", projects  })


    
        // commission(10) = commission*goal/100

        // gst(18) = commission*gst/100
        // pg(2) = (goal+commission)*pg/100
        // target = commission + gst + pg
  
}



exports.getAllProjects = async (req, res) => {
    const { search, offset, pageSize } = paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    );
    let query = {};
    const searchQuery = {
        [Op.and]: [query, {
            [Op.or]: {
                title: { [Op.like]: "%" + search + "%" },
                goal: { [Op.like]: "%" + search + '%' },
                target: { [Op.like]: "%" + search + '%' },
                funded: { [Op.like]: "%" + search + '%' },
                endDate: { [Op.like]: "%" + search + '%' },
            }
        }],
    };
    const project = await models.projects.findAll({
        where: searchQuery,
        offset: offset,
        limit: pageSize
    });

    // var endDate = await project.map(ele=>{ return ele.dataValues.endDate})

    //var end_Date = moment(endDate).format('YYYY-MM-DD'); //end date - current date

    // let end_date;

    let current_date = moment();
    let days_left;

    await project.map(ele => {
        eleDate = moment(ele.dataValues.endDate)
        days_left = eleDate.diff(current_date, 'days');
        if (days_left < 0) {
            days_left = 'Ended'
        }
        ele.dataValues.DaysLeft = days_left;
    })


    if (!project) {
        return res.status(400).json({ message: "No data Found" })
    } else {
        return res.status(200).json({ message: "All Projects", result: project })
    }
}

exports.getProjectById = async (req, res) => {
    const id = req.params.id;

    const project = await models.projects.findOne({ where: { id: id }, attributes: ['title', 'description', 'recurringDays', 'goal'] })

    if (!project) {
        return res.status(400).json({ message: "No data Found" })
    } else {
        return res.status(200).json({ message: "All Projects", result: project })
    }

}

exports.updateStatus = async (req, res) => {
    const id = req.params.id;
    const project = await models.projects.update({ status: req.body.status }, { where: { id: id } })
    if (!project) {
        return res.status(404).json({ message: "Not Found" })
    } else {
        return res.status(200).json({ message: "Status Updated Successfully" })
    }
}

exports.setHomeProject = async (req, res) => {
    let id = req.params.id;
    let { setHomeProjet } = req.body;
    const data = await models.projects.update({ displayOnHomeStatus: 0 }, { where: { displayOnHomeStatus: 1 } })
    const project = await models.projects.update({ displayOnHomeStatus: 1 }, { where: { id: id } });
    return res.status(200).json({ project: project, data: data });
}


exports.addFunds = async (req, res) => {
    let id = req.params.id;

    let data = await models.projects.findOne({ where: { id: id } });

    let maxLimit = data.target - data.funded
    if (req.body.funded > maxLimit) {
        return res.status(400).json({ message: "Check Max Limit" });
    }
    const fund = data.funded + req.body.funded;
    const checkData = await models.projects.update({ funded: fund }, { where: { id: id } })

}


exports.getCompletedProject = async (req, res) => {
    let projects = await models.projects.findAll({ where: { status: 1 } });
    if (!projects) {
        return res.status(404).json({ message: "data not found" })
    } else {
        return res.status(404).json({ message: "Project Data", result: projects })
    }
}

