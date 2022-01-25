const models = require('../models');
const { paginationWithFromTo } = require('../utils/pagination')
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;
const moment = require('moment');

//Creating Projects
exports.addProjects = async (req, res) => {
    let { userId, title, slogan, description, longDesc, videoLink, goal, commission, target, funded, startDate, endDate, recurringDays, isRecurring } = req.body;
    let { banner, cover, mobile, slider1, slider2, slider3, slider4, slider5, slider6 } = req.body;
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

    let commissionModel;
    let isActive;
    let projects;

    if (req.body.commission == null || req.body.commission == undefined) {
        commissionModel = (Number(commission) * goal) / 100;   //One Inr Owner Commission
    } else {
        commissionModel = (Number(commission) * goal) / 100;   //One Inr Owner Commission
    }
    let gstCal = (commissionModel * gst) / 100;   //GST Calculaion After taking commision on goal.
    let paymentGatewayCal = (Number(goal) + commissionModel + gstCal) * pg / 100;   //Payment Gateway Calculation after calculating GST.
    target = Number(goal) + Number(commissionModel) + Number(gstCal) + Number(paymentGatewayCal); //Calculating Target
    target = Math.round(target) //Rounding off target value.

    let projectIntervalEndDate = await moment(startDate).add(recurringDays, 'days').format('YYYY-MM-DD')
    startDate = await moment(startDate).format('YYYY-MM-DD')

    //If start date of project is bigger than todays date then project status will be inactive 
    var currentDate = await moment().format('YYYY-MM-DD');
    if (startDate > currentDate) {
        isActive = false
    } else {
        isActive = true
    }


    let data = await sequelize.transaction(async (t) => {
        projects = await models.projects.create({ userId, title, slogan, description, longDesc, videoLink, goal, commission, target, funded, startDate, endDate, recurringDays, isRecurring, isActive },
            { transaction: t }
        )
        projectImage = await models.project_image.create({ projectId: projects.dataValues.id, isActive, banner, cover, mobile, slider1, slider2, slider3, slider4, slider5, slider6 }, { transaction: t })
        if (isRecurring == true) {
            projectInterval = await models.projectInterval.create({ projectId: projects.dataValues.id, startDate, endDate: projectIntervalEndDate })
        }
        if (!(projects && projectImage)) {
            return true
        } else {
            return false
        }
    })
    if (data) {
        return res.status(400).json({ message: "Failed to create Project." })
    }

    return res.status(201).json({ message: "Success", projects })

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

