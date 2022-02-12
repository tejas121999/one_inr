const models = require('../models');
const { paginationWithFromTo } = require('../utils/pagination')
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;
const moment = require('moment');
const cron = require('node-cron')
const check = require('../lib/checkLib');
const { getCommission } = require('../service/getCommision');

//Creating Projects
exports.addProjects = async (req, res) => {
    let { userId, title, description, longDesc, videoLink, goal, commission, target, funded, startDate, endDate, recurringDays, isRecurring } = req.body;
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
        commissionModel = (Number(req.body.commission) * goal) / 100;   //One Inr Owner Commission
    }
    let gstCal = (commissionModel * gst) / 100;   //GST Calculaion After taking commision on goal.
    let paymentGatewayCal = (Number(goal) + commissionModel + gstCal) * pg / 100;   //Payment Gateway Calculation after calculating GST.
    target = Number(goal) + Number(commissionModel) + Number(gstCal) + Number(paymentGatewayCal); //Calculating Target
    target = Math.round(target) //Rounding off target value.

    let projectIntervalEndDate = moment(startDate).add(recurringDays, 'days').format('YYYY-MM-DD')
    startDate = moment(startDate).format('YYYY-MM-DD')

    //If start date of project is bigger than todays date then project status will be inactive 
    var currentDate = moment().format('YYYY-MM-DD');
    if (startDate > currentDate) {
        isActive = false
    } else {
        isActive = true
    }
    let slogan = title.split(" ").join('-').toLowerCase()   //Slogan in DB contains all lower case letter seperated by dash.
    let data = await sequelize.transaction(async (t) => {
        projects = await models.projects.create({ userId, title, slogan, description, longDesc, videoLink, goal, commission, target, funded, startDate, endDate, recurringDays, isRecurring, isActive },
            { transaction: t }
        )
        projectImage = await models.project_image.create({ projectId: projects.dataValues.id, isActive, banner, cover, mobile, slider1, slider2, slider3, slider4, slider5, slider6 }, { transaction: t })
        if (isRecurring == true) {
            projectInterval = await models.projectInterval.create({ projectId: projects.dataValues.id, startDate, endDate: projectIntervalEndDate, goal, commission, target }, { transaction: t })
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

exports.updateProject = async (req, res) => {
    let { userId, title, description, longDesc, videoLink, goal, commission, target, funded, startDate, endDate, recurringDays, isRecurring } = req.body;
    let { banner, cover, mobile, slider1, slider2, slider3, slider4, slider5, slider6 } = req.body;
    const id = req.params.id;


    //calculations
    recurringDays = recurringDays || 0;
    const configData = await models.configs.findAll();
    let gst;
    let pg;

    await configData.map(ele => {
        // if (ele.dataValues.name === 'commission') {
        //     commission = ele.dataValues.value;}
        if (ele.dataValues.name === 'gst') {
            gst = ele.dataValues.value;
        } if (ele.dataValues.name === 'payment_gateway_percentage') {
            pg = ele.dataValues.value;
        }
    });

    let commissionModel;
    let isActive;
    let pDetails;

    commissionModel = (Number(commission) * goal) / 100;   //One Inr Owner Commission
    let gstCal = (commissionModel * gst) / 100;   //GST Calculaion After taking commision on goal.
    let paymentGatewayCal = (Number(goal) + commissionModel + gstCal) * pg / 100;   //Payment Gateway Calculation after calculating GST.
    target = Number(goal) + Number(commissionModel) + Number(gstCal) + Number(paymentGatewayCal); //Calculating Target
    target = Math.round(target) //Rounding off target value.
    let slogan = title.split(" ").join('-').toLowerCase()
    const project = await models.projects.findByPk(id)

    if (!project) {
        return res.status(400).json({ message: "No data Found" })
    }
    let data = await sequelize.transaction(async (t) => {
        pDetails = await models.projects.update({ userId, title, slogan, description, longDesc, videoLink, goal, commission, target, funded, startDate, endDate, recurringDays, isRecurring, isActive }, { where: { id } },
            { transaction: t }
        )
        projectImage = await models.project_image.update({ projectId: id, isActive, banner, cover, mobile, slider1, slider2, slider3, slider4, slider5, slider6 }, { where: { id } }, { transaction: t })
        // if (isRecurring == true) {
        // projectInterval = await models.projectInterval.update({ endDate: projectIntervalEndDate, goal, commission, target }, { where: { id }},{ transaction: t })
        // }
        if (!(pDetails && projectImage)) {
            return true
        } else {
            return false
        }
    })

    if (data) {
        return res.status(400).json({ message: "Failed to Update Project" })
    }
    return res.status(201).json({ message: "Project Updated successfully" })
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
        limit: pageSize,
        order: [
            ['id', 'DESC']
        ]
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

    const project = await models.projects.findOne({
        where: { id: id },
        // include: { model: models.projectInterval }
        include: { model: models.project_image }

    })

    if (!project) {
        return res.status(400).json({ message: "No data Found" })
    } else {
        return res.status(200).json({ message: "Project fetched", result: project })
    }

}

//update project status 
exports.updateStatus = async (req, res) => {
    const id = req.params.id;
    const checkProject = await models.projects.findOne({ where :{id: id}});
    if(check.isEmpty(checkProject)){
       return res.status(404).json({message :"Project not found"});
    }
    const project = await models.projects.update({ isActive: req.body.status }, { where: { id: id } })
    if (project[0] == 1) {
        return res.status(200).json({ message: "Status Updated Successfully", project })
    } else {
        return res.status(200).json({ message: "Status not updated ",project })
    }
}

exports.setHomeProject = async (req, res) => {
    try {
        const id = req.params.id;
        let { changeOldHomeProjectCommi, changeNewHomeProjectCommi, oldCommision, newCommision } = req.body;
        console.log(id)
        const checkHomeProject = await models.projects.findOne({ where: { id: id } });
        if (!check.isEmpty(checkHomeProject)) {
            if (checkHomeProject.displayOnHomeStatus) {
                return res.status(200).json({ message: `You can't disable all the home project` });
            }
        } else {
            return res.status(404).json({ message: "Project not found", checkHomeProject });
        }

        if (changeOldHomeProjectCommi) {
            console.log(oldCommision)
            if (oldCommision == null || oldCommision == undefined) {
                return res.status(400).json({ message: "Commission1 required" });
            }
        }

        if (changeNewHomeProjectCommi) {
            if (newCommision == null || oldCommision == undefined) {
                return res.status(400).json({ message: "Commission2 required" });
            }
        }
        const data = await sequelize.transaction(async (t) => {
            const oldHomeProject = await models.projects.findOne({ where: { displayOnHomeStatus: 1 } });
            console.log(oldHomeProject)
            if (!check.isEmpty(oldHomeProject)) {
                let targetOldProject = 0;
                let targetNewProject = 0;
                let oldProjectcommission = 0;
                let newProjectcommission = 0;
                if (changeOldHomeProjectCommi) {
                    targetOldProject = await getCommission(oldCommision, oldHomeProject.goal);
                    oldProjectcommission = oldCommision;
                } else {
                    targetOldProject = oldHomeProject.target;
                    oldProjectcommission = oldHomeProject.commission;
                }
                if (changeNewHomeProjectCommi) {
                    targetNewProject = await getCommission(newCommision, checkHomeProject.goal);
                    newProjectcommission = newCommision;
                }
                else {
                    targetNewProject = checkHomeProject.target;
                    newProjectcommission = checkHomeProject.commission;
                }
                const oldProjectData = await models.projects.update({ commission: oldProjectcommission, target: targetOldProject, displayOnHomeStatus: 0 }, { where: { id: oldHomeProject.id } }, { transaction: t });

                const newProjectData = await models.projects.update({ commission: newProjectcommission, target: targetNewProject, displayOnHomeStatus: 1 }, { where: { id: id } }, { transaction: t });

                if (oldProjectData[0] == 1 && newProjectData[0] == 1) {
                    return { sucess: true, status: 200 };
                } else {
                    return { sucess: false, status: 400 };
                }
            } else {
                return res.status(400).json({ message: "Not found", oldHomeProject })
            }
        });

        if (data.sucess) {
            return res.status(data.status).json({ message: "Data updated suceessfully" });
        }
        else {
            return res.status(data.status).json({ message: "Data not updated" });
        }
    }
    catch (err) {
        console.log(err)
    }
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
    let projects = await models.projects.findAll({ where: { isActive: false } });
    if (projects) {
        return res.status(200).json({ message: "Project Data", result: projects })
    } else {
        return res.status(400).json({ message: "data not found" })

    }
}

exports.createRecuringProject = async (req, res) => {
    let data = await models.projects.findAll({
        where: { isRecurring: true, isActive: true }, attributes: ['id', 'recurringDays'],
        include: { model: models.projectInterval, where: { isActive: true, endDate: { [Op.lt]: moment().format(('YYYY-MM-DD')) }, }, attributes: ['endDate', 'id'] }
    })
    data.forEach(item => {
        createProjectInterval(item.id, item.recurringDays, item.projectIntervals[0].dataValues.endDate, item.projectIntervals[0].dataValues.id)
    });
    return
}
async function createProjectInterval(id, RecurringDays, projectEndDate, pId, todaysDate) {
    todaysDate = moment().format('YYYY-MM-DD')
    let data;
    if (todaysDate > projectEndDate) {
        let dates = await generateNewDate(projectEndDate, RecurringDays, id)
        await sequelize.transaction(async (t) => {
            await models.projectInterval.create({ projectId: id, startDate: dates.startDate, endDate: dates.newProjectIntervalDate, isActive: true }, t)
            data = await models.projectInterval.update({ isActive: false }, { where: { id: pId } }, t)
            if (!data[0]) {
                return false;
            }
        })

    }
    if (data === false) {
        return false
    }
}

async function generateNewDate(projectEndDate, recurringDays) {
    let newProjectIntervalDate = moment(projectEndDate).add(recurringDays, 'days').format('YYYY-MM-DD')
    startDate = moment(projectEndDate).add(1, 'days').format('YYYY-MM-DD')
    return { newProjectIntervalDate, startDate }
}

