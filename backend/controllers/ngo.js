// const { DataTypes } = require('sequelize/types');
const models = require('../models');
const paginationFunc = require('../utils/pagination');
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;
const twinBcrypt = require('twin-bcrypt');
const saltRounds = 10;
const moment = require('moment');
const { createBankData } = require('../service/createBankData');




// Creating Ngo 
//It will create a user in user model then ngo in ngo model and if there is bank details it will create bank details.
exports.addNgo = async (req, res) => {
    var new_date = moment().add(365, 'days').format()
    let { name, email, mobile, password, } = req.body;
    let { address, registrationDate, registrationNumber, landline, panCard, panNumber, certificate, charityRegistrationCertificate, logo, deed, signature, isKyc } = req.body;
    registrationDate = moment(registrationDate).format("YYYY-MM-DD")

    const hash = await twinBcrypt.hashSync(password, saltRounds);
    var cBankData;
    await sequelize.transaction(async (t) => {

        let data = await models.users.create(
            { name, email, mobile, password: hash, balanceNextRenewDate: new_date },
            { transaction: t }
        )
        let createNgo = await models.ngo.create(
            { userId: data.id, address, registrationDate, registrationNumber, landline, panCard, panNumber, certificate, charityRegistrationCertificate, logo, deed, signature, isKyc },
            { transaction: t }
        )
        if (req.body.bankDetails) {
            for (const item of req.body.bankDetails) {
                cBankData = await createBankData({ userId: data.id, bankName: item.bankName, accountNumber: item.accountNumber, beneficiaryName: item.beneficiaryName, ifsc: item.ifsc }, t)
            }
        }

    })

    if (cBankData == false) {
        return res.status(401).json({ message: " Failed to create NGO." })
    } else {
        return res.status(201).json({ message: "Ngo Created successfully." })
    }

}




//updating ngo
exports.updateNgo = async (req, res) => {
    const id = req.params.id;
    let { name, email, mobile, password, } = req.body;
    let { address, registrationDate, registrationNumber, landline, panCard, panNumber, certificate, charityRegistrationCertificate, logo, deed, isKyc } = req.body;
    //FINDING USER ID THROUGH NGO
    let getUser = await models.ngo.findOne({
        where: { id },
        include: { model: models.users, attributes: ['id', 'name'] }
    })
    let userId = getUser.user.id  //User ID
    const hash = await twinBcrypt.hashSync(password, saltRounds);
    var cBankData;
    let createNgo;
    let data;
    await sequelize.transaction(async (t) => {
        data = await models.users.update(
            { name, email, mobile, password: hash }, { where: { id: userId } },
            { transaction: t }
        )
        createNgo = await models.ngo.update(
            { address, registrationDate, registrationNumber, landline, panCard, panNumber, certificate, charityRegistrationCertificate, logo, deed, isKyc }, { where: { id } },
            { transaction: t }
        )
        if (req.body.bankDetails) {
            for (const item of req.body.bankDetails) {
                cBankData = await createBankData({ userId: userId, id, bankName: item.bankName, accountNumber: item.accountNumber, beneficiaryName: item.beneficiaryName, ifsc: item.ifsc },
                    t
                )
            }
        }
    })
    if (cBankData == false || data == [0] || createNgo == [0]) {
        return res.status(401).json({ message: " Failed to create NGO." })
    } else {
        return res.status(201).json({ message: "Ngo Updated successfully." })
    }
}



//Read ngo details
exports.getAllNgo = async (req, res) => {
    let query = {};

    //pagination
    const { search, offset, pageSize } = paginationFunc.paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    )
    //SEARCH QUERY
    const searchQuery = {
        [Op.and]: [query, {
            [Op.or]: {
                address: { [Op.like]: '%' + search + '%' },
                landline: { [Op.like]: '%' + search + '%' },
                registrationNumber: { [Op.like]: '%' + search + '%' },
                landline: { [Op.like]: '%' + search + '%' },
                panNumber: { [Op.like]: '%' + search + '%' },
            },
        }],
    }
    // const searchQueryForUser = {
    //     [Op.and]:[query, {
    //         [Op.or]: {
    //             mobile : {[Op.like]: '%'+ query + '%'}
    //         }
    //     }
    //     ]
    // }
    const data = await models.ngo.findAll({
        limit: pageSize,
        offset: offset,
        where: searchQuery,
        include: [{
            model: models.users,
            model: models.projects
            // where: searchQueryForUser,
        }
        ],
        order: [
            ['id', 'DESC']
        ]
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




exports.getNgoById = async (req, res) => {
    let id = req.params.id
    let data = await models.ngo.findOne({
        where: { id: id },
        include: [{
            model: models.users,
            attributes: ['name', 'email', 'mobile'],
            include: [{
                model: models.bankDetails,
                attributes: { exclude: ['createdAt', 'updatedAt', 'deleted_at'] }
            }]
        }
        ],
    })
    if (!data) {
        return res.status(400).json({
            message: "Failed to get data"
        })
    }
    return res.status(200).json({
        message: "Success",
        data: data
    })

}


//Delete NGO details
exports.deleteNgo = async (req, res) => {
    let id = req.params.id

    let ngoExists = await models.ngo.findOne({
        where: { id: id }
    })
    if (!ngoExists) {
        return res.status(400).json({
            message: "Ngo Details does not Exists..."
        })
    }

    let data = await models.ngo.destroy({
        where: { id: id }
    })
    console.log('data', data)
    if (data) {

        return res.status(204).json({
            message: "NGO details deleted successfully..."
        })
    } else {
        res.status(400).json({
            message: err
        })
    }

}


exports.getNgoProjectDetails = async (req, res) => {
    let ngoId = req.params.id;
    let data = await models.projects.findAll({ where: { userId: ngoId } })
    var pendingCount = 0;
    var activeCount = 0;
    var fullFilledCount = 0;
    var partialFullfilled = 0;
    data.forEach(element => {
        if (element.isActive) {
            activeCount++;
        } else {
            pendingCount++;
        }
        if (element.funded >= element.target) {
            fullFilledCount++;
        } else {
            partialFullfilled++;
        }
    });
    return res.status(200).json({ pendingCount, activeCount, fullFilledCount, partialFullfilled, data, message: "success" })
}