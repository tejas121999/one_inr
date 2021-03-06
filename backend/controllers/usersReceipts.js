const models = require('../models');
const paginationFunc = require('../utils/pagination');
const Sequelize = models.Sequelize
const Op = Sequelize.Op;
const { recieptGenerator } = require('../utils/reciept_generate_pdf')
const path = require("path")
const fs = require("fs")
const html = fs.readFileSync(path.join(__dirname, '..', 'utils', 'templates', 'receipt.html'), 'utf-8');
const generateUserReceiptsExcel = require('../service/userReceiptsExcel')
const generatePdf = require('../utils/generatePdf')
const filePath = 'user-receipts'
const exportToCsv = require('../utils/exportToCsv')
const html1 = fs.readFileSync(path.join(__dirname, '..', 'utils', 'templates', 'userReceipts.html'), 'utf-8');



//Creating A Users Receipts
exports.addUsersReceipts = async (req, res) => {

    try {
        let {
            userId,
            intervalId,
            projectId,
            recieptPdf,
            mailSend,
            ngoId,
            amount,
            transactionType,
            realizationNo,
            realizationDate,
            drawnOnBank,
            branch,

        } = req.body;
        let findTotalReciepts = await models.usersReceipts.count()
        let receiptNumber = 1000 + findTotalReciepts.count++
        let usersReceipts = await models.usersReceipts.create({

            userId: req.body.userId,
            intervalId: req.body.intervalId,
            projectId: req.body.projectId,
            recieptPdf: req.body.receiptPdf,
            mailSend: req.body.mailSend,
            receiptNumber,
            ngoId: req.body.ngoId,
            amount: req.body.amount,
            transactionType: req.body.transactionType,
            realizationNo: req.body.realizationNo,
            realizationDate: req.body.realizationDate,
            drawnOnBank: req.body.drawnOnBank,
            branch: req.body.branch

        }
        )

        if (!usersReceipts) {
            return res.status(400).json({
                message: 'Failed to create Users Receipts'
            })
        } else {
            return res.status(200).json({
                message: 'Users Receipts created successfully'
            })
        }
    } catch (err) {
        return res.status(400).json({ message: err })
    }

}

//Updating Users Reciepts
exports.updateUsersReceipts = async (req, res) => {

    let usersReceiptsId = req.params.id;


    let {
        userId,
        intervalId,
        projectId,
        receiptNumber,
        recieptPdf,
        mailSend,
        ngoId,
        amount,
        transactionType,
        realizationNo,
        realizationDate,
        drawnOnBank,
        branch
    } = req.body;

    let usersReceiptsExists = await models.usersReceipts.findOne({ where: { id: usersReceiptsId } })

    if (!usersReceiptsExists) {
        return res.status(402).json({
            message: "Users Receipts does not exists"
        })
    }

    let usersReceiptsUpdate = await models.usersReceipts.update(
        {
            userId: req.body.userId,
            intervalId: req.body.intervalId,
            projectId: req.body.projectId,
            receiptNumber,
            recieptPdf: req.body.receiptPdf,
            mailSend: req.body.mailSend,
            ngoId: req.body.ngoId,
            amount: req.body.amount,
            transactionType: req.body.transactionType,
            realizationNo: req.body.realizationNo,
            realizationDate: req.body.realizationDate,
            drawnOnBank: req.body.drawnOnBank,
            branch: req.body.branch
        },
        {
            where: { id: usersReceiptsId }
        })

    if (usersReceiptsUpdate) {
        return res.status(200).json({ messgae: `Users Receipts updated successfully` });
    }

}

//Generating PDF for User Reciepts
exports.pdfForUserReceipt = async (req, res) => {
    try {

        const receipt_number = req.params.receipt_number

        const getReceiptDet = await models.usersReceipts.findOne({
            where: { receipt_number },
            attributes: ['receipt_number', 'amount', 'createdAt'],
            include: [
                {
                    model: models.users,
                    attributes: ['name', 'parentId'],
                    include: { model: models.users, attributes: ['id', 'name'] },
                }
            ]
        })

        if (getReceiptDet) {
            recieptGenerator(getReceiptDet, html)
            res.status(200).json({ message: 'Pdf Generated', data: getReceiptDet.dataValues });
        } else {
            return res.json({ message: "Receipt not found" })
        }

    } catch (err) {
        console.log(err);
    }
}




//Get all user receipts
exports.getAllUserReceipts = async (req, res) => {
    let query = {};
    //paginantion 

    const { search, offset, pageSize } = paginationFunc.paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    )
    // Search query
    const searchQuery = {
        [Op.and]: [query, {
            [Op.or]: {
                receiptNumber: { [Op.like]: search + '%' },
                amount: { [Op.like]: search + '%' },
                transactionType: { [Op.like]: search + '%' },
                realizationNo: { [Op.like]: search + '%' },
                realizationDate: { [Op.like]: search + '%' },
                transactionType: { [Op.like]: search + '%' },
                branch: { [Op.like]: search + '%' },
            },
        }],

    }

    const data = await models.usersReceipts.findAndCountAll({
        where: searchQuery,
        order: [
            ['updatedAt', 'DESC']
        ],
        offset: offset,
        limit: pageSize,
    });

    if (!data) {
        return res.status(400).json({
            message: "Failed to get all data."
        })
    }

    return res.status(200).json({
        data: data,
        message: "Found All Data."
    })
}


//GET user by ID
exports.getUserReceiptsById = async (req, res) => {
    let id = req.params.id;

    const data = await models.usersReceipts.findOne({ id });


    if (!data) {
        return res.status(400).json({
            message: "Failed to get all data."
        })
    }

    return res.status(200).json({
        data: data,
        message: "Found All Data."
    })
}


exports.getUserData = async (req, res) => {

    const data = await models.usersReceipts.findAll({
        include: [{ model: models.users, attributes: ['name'] }]
    });


    if (!data) {
        return res.status(400).json({
            message: "Failed to get all data."
        })
    }

    return res.status(200).json({
        data: data,
        message: "Found All Data."
    })
}


//get user receipts by ID
exports.getUserReceiptsById = async (req, res) => {
    let dataId = req.params.id;


    let data = await models.usersReceipts.findOne({ where: { id: dataId } })

    if (!data) {
        return res.status(400).json({
            message: "Users Receipts does not exists"
        })
    }
    return res.status(200).json({
        data: data,
        message: "Found All Data."
    })
}






exports.pdfOfUserReceipts = async (req, res) => {
    try {

        const urlData = req.get('host');
        let userReceiptsData = await models.usersReceipts.findAll({
            include: [{ model: models.users, attributes: ['name'] }]
        });

        const userDataValues = await userReceiptsData.map(ele => { return ele.dataValues });


        // const userName = await userDataValues.map(ele => { return ele.user.dataValues.name

        // })

        if (!userReceiptsData) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            const pdfData = await generatePdf.pdfGenerator(userReceiptsData, filePath, html1)
            res.status(200).json({ message: 'Pdf Generated', url: 'http://' + urlData + pdfData.path });
        }
    } catch (err) {
        console.log(err);
    }
}


exports.getUserReceiptExcel = async (req, res) => {
    try {
        const urlData = req.get('host');
        let userReceiptsData = await models.usersReceipts.findAll({
            include: [{ model: models.users, attributes: ['name'] }]
        });

        const userDataValues = await userReceiptsData.map(ele => { return ele.dataValues });
        // res.json({userDataValues: userDataValues})

        if (!userReceiptsData) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            const userReceiptsXlsx = await generateUserReceiptsExcel(userDataValues, res)
            res.status(200).json({ message: 'Xlsx Generated', url: 'http://' + urlData + userReceiptsXlsx.pathToExport });
        }
    } catch (e) {
        console.log(e)
    }
}


exports.getUserReceiptCsv = async (req, res) => {
    try {
        const urlData = req.get('host');
        let userReceiptsData = await models.usersReceipts.findAll({
            include: [{ model: models.users, attributes: ['name'] }]
        });
        if (!userReceiptsData) {
            res.status(404).json({ message: 'Data not found' })
        } else {
            const csvData = await exportToCsv.exportsToCsv(userReceiptsData, filePath, "", res)
            res.status(200).json({ message: 'Exported Data into CSV', url: `http://` + urlData + csvData.downloadPath })
        }
    } catch (err) {
        console.log(err)
    }
}


