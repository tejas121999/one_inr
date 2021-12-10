const models = require('../models')
const { paginationWithFromTo } = require('../utils/pagination')
const { bulkUserUploadService } = require('../service/bulkUploadService')
// const exportToCsv = require('../utils/exportToCsv')
const sequelize = models.Sequelize;
const csv = require('csvtojson')
const twinBcrypt = require('twin-bcrypt')
const saltRounds = 10;
const Op = sequelize.Op;
const moment = require('moment')
const generatePdf = require('../utils/generatePdf')
const path = require('path')
const filePath = 'donor'
var fs = require("fs");
const exportToCsv = require('../utils/exportToCsv')
const html = fs.readFileSync(path.join(__dirname, '..', 'utils', 'templates', 'donor.html'), 'utf-8');


//Creating a Donor 
exports.addDonor = async (req, res) => {
    let { name, email, mobile, role_id, password, parentId } = req.body

    // let balanceNextRenewDate = moment().endOf('year').fromNow();
    var new_date = moment().add(365,'days').format()
    console.log(new_date)
    const hash = await twinBcrypt.hashSync(password, saltRounds);

    let userData = await models.users.create({ name, email, mobile, role_id, password: hash, parentId, balanceNextRenewDate : new_date })
    if (!userData) {
        return res.status(401).json({
            message: "Failed to create a user"
        })
    }
    else {
        return res.status(200).json({
            message: "User created successfully",
        })
    }


}

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
                balance: { [Op.like]: search + '%' }
            },
        }]
    };
    const data = await models.users.findAll({
        offset: offset,
        limit: pageSize,
        where: searchQuery
    })
    if (!data) {
        return res.status(400).json({
            message: "Failed to get all data."
        })

    }
    return res.status(200).json({
        message: "Success",
        count: data.length,
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
    let data = await models.users.findOne({ where: { id: id } })
    if (!data) {
        return res.status(400).json({
            message: "Donor does not exist"
        })
    }
    return res.status(200).json({
        data: data
    })
}

//Updating a Donor
exports.updateDonor = async (req, res) => {
    let id = req.params.id
    let { name, mobile, email, plan, parentId, balanceNextRenewDate } = req.body;
    let donorExists = await models.users.findOne({ where: { id: id } })
    if (!donorExists) {
        return res.status(400).json({
            message: "Donor does not exists"
        })
    }

    let donorUpdate = await models.users.update({ name, mobile, email, parentId, plan, balanceNextRenewDate }, { where: { id: id } })
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
    let donorUpdate = await models.users.update({ balance: (donorExists.dataValues.balance + balance) }, { where: { id: id } })
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
    if (!data) {
        return res.status(204).json({
            message: "Failed to delete a user"
        })
    }
    return res.status(200).json({
        message: "Donor deleted scuccessfully."
    })
}

exports.getAllUpcomingDonors = async (req, res) => {
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
                balance: { [Op.like]: search + '%' },
            }
        }],
        balanceNextRenewDate: { [Op.between]: [startDate, endDate] },

    };

    const data = await models.users.findAll({
        where: searchQuery,
        offset: offset,
        limit: pageSize,

    })
    if (!data) {
        return res.status(400).json({
            message: "Failed to get all data."

        })
    }
    return res.status(200).json({
        count: data.length,
        message: "Success",
        data: data,

    })
}

exports.addDonerThroughExcel = async (req, res, next) => {
    try {


        let { path, fileExtension } = req.body
        //const userId = "1",
        const fileId = req.body.fileId;
        let dataArray;
        if (fileExtension === "csv") {
            dataArray = await csv().fromFile(path);
        } else {
            return res.status(400).json({ message: "Incorrect File Format" })
        }

        const userData = await bulkUserUploadService(dataArray, fileId);
        //console.log(userData)

        if (!userData.success) {
            console.log("in error");
            return res.status(userData.status).json({ message: userData.message })

        } else {
            console.log("\n\n\nin success")
            const userUploadData = await models.bulkUserUpload.findAll({
                where: { fileId: fileId }
            })
            // console.log(userUploadData)

            for (const user of userUploadData) {
                console.log("in for lopp", user)
                if (user.name.length > 0) {
                    console.log("in name");
                    if (user.email.length > 0) {
                        console.log("in email");

                        if (user.mobile > 0) {
                            console.log("in mobile");
                            if (user.balance > 0) {
                                if (user.password.length > 0) {
                                    const hash = await twinBcrypt.hashSync(user.password, saltRounds);

                                    let userUploading = await models.users.create({
                                        name: user.name,
                                        email: user.email,
                                        mobile: user.mobile,
                                        balance: user.balance,
                                        password: hash
                                    })

                                    console.log("in if ", userUploading);
                                    if (userUploading) {
                                        await models.bulkUserUpload.update(
                                            { status: 'Success' },
                                            { where: { id: user.id } }
                                        )
                                    } else {
                                        await models.bulkUserUpload.update(
                                            {
                                                status: 'Error',
                                                message: 'fail to create user'
                                            },
                                            { where: { id: user.id } }
                                        )
                                    }
                                } else {
                                    await models.bulkUserUpload.update(
                                        {
                                            status: "error",
                                            message: "Password size should be greater than zero"
                                        },
                                        { where: { id: user.id } }
                                    )
                                }
                            } else {
                                await models.bulkUserUpload.update(
                                    {
                                        status: "Error",
                                        message: "Balance should be greater than zero"
                                    },
                                    { where: { id: user.id } }
                                )
                            }
                        } else {
                            await models.bulkUserUpload.update(
                                {
                                    status: 'Error',
                                    message: "Mobile number should be greater than zero"
                                },
                                { where: { id: user.id } }
                            )
                        }
                    } else {
                        await models.bulkUserUpload.update(
                            {
                                status: 'Error',
                                message: 'email should be greaer than zero'
                            },
                            { where: { id: user.id } }
                        )
                    }
                } else {
                    await models.bulkUserUpload.update(
                        {
                            status: "Error",
                            message: "Name should be greater than Zero"
                        },
                        { where: { id: user.id } }
                    )
                }
                //console.log(user)
            }
            return res.status(200).json({ message: "data added success" });
        }
    }
    catch (err) {
        console.log(err)
    }
}

exports.generateDonorPdf = async (req,res) => {
    try {
        const urlData = req.get('host');
        let donorData = await models.users.findAll();
        if (!donorData) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            const pdfData = await generatePdf.pdfGenerator(donorData,filePath, html)
            res.status(200).json({ message: 'Donor Pdf Generated', url : 'http://' + urlData + pdfData.path });
        }
    } catch (err) {
        console.log(err);
    }
}

exports.exportsDonorCsv = async (req, res) => {
    try{
        const urlData = req.get('host');
        let Donors = await models.users.findAll();
        if(!Donors){
            res.status(404).json({message:'Data not found'})
        }else{
            const csvData = await exportToCsv.exportsToCsv(Donors,filePath,"",res)
            res.status(200).json({message:'Exported Data into CSV', url : `http://` + urlData + csvData.downloadPath })
        }
    }catch(err){
        console.log(err)
    }
}
