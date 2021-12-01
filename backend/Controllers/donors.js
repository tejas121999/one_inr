const models = require('../models')
const {paginationWithFromTo} = require('../utils/pagination')
const sequelize = models.Sequelize;
const Op = sequelize.Op;
const moment = require('moment')
//Get all details of all donor in DB
exports.getAllDonor = async (req, res) => {
    const { search, offset, pageSize } = paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    );
    let query = {};
        
    const searchQuery = {
        [Op.and]: [query, {
          [Op.or]: {
            name: { [Op.like]: search + "%" },
            balance : {[Op.like] : search + '%'}
          },
        }]
      };
    const data = await models.users.findAll({
        offset: offset,
        limit: pageSize,
        where : searchQuery
    })
    if (!data) {
        return res.status(400).json({
            message : "Failed to get all data."
        })
    
    }
    return res.status(200).json({
        message: "Success",
        count : data.length,
        data: data,

    })
}
//Get api for getting parent details 
exports.getAllParentDetails = async (req, res) => {
    const data = await models.users.findAll({
        attributes: ['name', 'id']

    })
    if (!data) {
        return res.status(400).json({ message: "Failed to get parent details" })
    }
    else {
        return res.status(200).json({
            data: data
        })
    }
}

exports.getDonorById = async (req, res) => {
    let id = req.params.id;
    let data = await models.users.findOne({ where: { id: id }})
    if (!data) {
        return res.status(400).json({
            message: "Failed to get Donor Details"
        })
    }
    return res.status(200).json({
        data: data
    })
}

//Updating a Donor
exports.updateDonor = async (req, res) => {
    let id = req.params.id
    let { name, mobile, email, plan, balanceNextRenewDate } = req.body;
    let donorExists = await models.users.findOne({ where: { id: id } })
    if (!donorExists) {
        return res.status(400).json({
            message: "Donor does not exists"
        })
    }

    let donorUpdate = await models.users.update({ name, mobile, email, plan, balanceNextRenewDate }, { where: { id: id } })
    if (!donorUpdate[0]) {
        return res.status(400).json({
            message: "Failed to update donor"
        })
    }
    return res.status(201).json({
        message: "Donor Updated Successfully",
    })
}
//Update a Donor Balance 
exports.updateDonorBalance = async (req, res) => {
    let id = req.params.id
    let { balance } = req.body;
    

    let donorExists = await models.users.findOne({ where: { id: id } })
    if (!donorExists) {
        return res.status(400).json({
            message: "Donor does not exists"
        })
    }
    let donorUpdate = await models.users.update({ balance :(donorExists.dataValues.balance + balance) }, { where: { id: id } })
    console.log(`data`, donorUpdate)
    if (!donorUpdate[0]) {
        return res.status(400).json({
            message: "Failed to update balance"
        })
    }
    return res.status(200).json({
        message: "User Balance Updated"
    })
}
//Delete a Donor Balance
exports.deleteDonor = async (req, res) => {
    let id = req.params.id
    
    let donorExists = await models.users.findOne({ where: { id: id } })
    if (!donorExists) {
        return res.status(400).json({
            message: "Donor does not exists"
        })
    }

    let data = models.users.destroy({ where: { id: id } })
    console.log(`data`, data)
    if (!data) {
        return res.status(200).json({
            message: "Failed to delete a user"
        })
    }
    return res.status(200).json({
        message: "Donor deleted scuccessfully."
    })
}

exports.getAllUpcomingDonors = async (req,res)=>{
    const { search, offset, pageSize } = paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    );
    let query = {};

    //Using moment to get the first date of the current year
    const startDate = moment().startOf('year'); 
    //to get the last date of the current year 
    const endDate = moment().endOf('year');

    const searchQuery = {
        [Op.and]: [query, {
          [Op.or]: {
            name: { [Op.like]: search + "%" },
            balance : {[Op.like] : search + '%'} ,
             }
        }],
        balanceNextRenewDate : { [Op.between]: [startDate ,endDate]},

      };
    
    const data = await models.users.findAll({
        where : searchQuery,
        offset: offset,
        limit: pageSize,        
        
    })
    if (!data) {
        return res.status(400).json({
            message : "Failed to get all data."
            
        })
    }
    return res.status(200).json({
        count : data.length,
        message: "Success",
        data: data,

    })
}