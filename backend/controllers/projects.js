const { sequelize } = require('../models');
const models = require('../models');
const {paginationWithFromTo} = require('../utils/pagination')
const Sequelize = models.Sequelize;
const Op = Sequelize.Op;
const moment = require('moment');

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

        // commission(10) = commission*goal/100

        // gst(18) = commission*gst/100
        // pg(2) = (goal+commission)*pg/100
        // target = commission + gst + pg
        
        const configData = await models.configs.findAll();
 
        let gst;
        let pg;

        await configData.map(ele=>{
            if(ele.dataValues.name === 'commission'){
                commission = ele.dataValues.value;
            }if(ele.dataValues.name === 'gst'){
                gst = ele.dataValues.value;
            }if(ele.dataValues.name === 'payment_gateway_perc'){
                pg = ele.dataValues.value;
            }
        });        
        
        let commissionModel;
        let gstCal;
        let pgCal;


        if(req.body.commission==null){
            commissionModel = (Number(commission)*goal)/100;
        }else{
            commissionModel = (Number(commission)*goal)/100;
        }

        // console.log(commm,gst,pg);

        gstCal = (commissionModel*gst)/100;
        pgCal = (Number(goal)+commissionModel)*pg/100;  
        
        target = Number(goal) + Number(commissionModel) + Number(gstCal) + Number(pgCal);

        // console.log('=============================',target);
        
        console.log(target);

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
    
    var endDate = await project.map(ele=>{ return ele.endDate})
    console.log(endDate);
    
    //var end_Date = moment(endDate).format('YYYY-MM-DD'); //end date - current date

    // let end_date;

    var current_date = moment().format('YYYY-MM-DD');

    var newDate = moment(new Date(endDate[0]))
    var DaysLeft = newDate.diff(current_date, 'days');

    console.log(DaysLeft)

    // for(let enddate=0;enddate<=endDate.length;enddate++){

    //         var dasLeft = moment.duration(enddate.diff(current_date)).asDays();
    //         console.log(dasLeft)
    //         // var DaysLeft = x[0].diff(current_date, 'days');
    //         // console.log(DaysLeft)
  
    // }

    console.log('=====================',DaysLeft);

    // console.log(end_Date);
    // console.log(current_date);


    if(!project) {
        return res.status(400).json({message : "No data Found"})
    }else{
        return res.status(200).json({message : "All Projects", result : project})
    }
}

exports.getProjectById = async (req, res)=>{
    const id = req.params.id;

    const project = await models.projects.findOne({where: { id: id },attributes:['title','description','recurringDays','goal']})

    if(!project){
        return res.status(400).json({message : "No data Found"})
    }else{
        return res.status(200).json({message : "All Projects", result : project})
    }

}

