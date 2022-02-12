//const { DataTypes } = require('sequelize/types');
const models = require('../models');
const paginationFunc = require('../utils/pagination');
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;
const twinBcrypt = require('twin-bcrypt');
const saltRounds = 10;
const moment = require('moment');
const { createBankData, updateBankData } = require('../service/createBankData');





// Creating Ngo 
//It will create a user in user model then ngo in ngo model and if there is bank details it will create bank details.

exports.addNgo = async (req, res) => {

    var new_date = moment().add(365, 'days').format()
    let { name, email, mobile, password, } = req.body;
    let { address, registrationDate, registrationNumber, landline, panCard, panNumber, certificate, charityRegistrationCertificate, logo, deed, signature, isKyc } = req.body;
    registrationDate = moment(registrationDate).format("YYYY-MM-DD")


    if (req.body.bankDetails) {
        for (let i = 0; i < req.body.bankDetails.length; i++) {
            const element = req.body.bankDetails[i];

            const existingBankAccount = await models.bankDetails.findOne({
                where: {
                    accountNumber: element.accountNumber,

                }
            })
            // validation for bank details account number
            if (existingBankAccount) {
                return res.status(403).json({ message: 'Account Number already exists!' })
            }
            // validation for bank name required
            if (!element.bankName || element.bankName.length === 0) {
                return res.status(403).json({ message: 'Bank Name is required' })
            }

            if (!element.accountNumber||element.accountNumber.length === 0) {
                return res.status(403).json({ message: 'Account number is required'})
            }
            //console.log(element.accountNumber.length)
            // if (element.accountNumber.length >12) {

            //     return res.status(403).json({ message: 'Account number should be max 12 digit' })
            // }

        
            if (!element.ifscCode || element.ifscCode.length === 0) {
                return res.status(403).json({ message: 'IFSC Code required' })
            }
          

            if ( !/^[A-Z|a-z]{4}0[0-9]{6}$/i.test(element.ifscCode)) {

                return res.status(403).json({ message: 'Invalid IFS Code' })
            }
        }
    }

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
                cBankData = await createBankData({ userId: data.id, bankName: item.bankName, accountNumber: item.accountNumber, beneficiaryName: item.beneficiaryName, ifsc: item.ifscCode }, t)
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
    try {


        const id = req.params.id;
        let { name, email, mobile, password, } = req.body;
        let { address, registrationDate, registrationNumber, landline, panCard, panNumber, certificate, charityRegistrationCertificate, logo, deed, isKyc,bankDetails } = req.body;
        //FINDING USER ID THROUGH NGO
        let getUser = await models.ngo.findOne({
            where: { id: id },
            include: { model: models.users,  as:'user', attributes: ['id', 'name'] }
        })
        let userId = req.userData.id  //User ID
        const hash = await twinBcrypt.hashSync(password, saltRounds);
        var cBankData;
        var uBankData;
        let updateNgo;
        let data;


        // validation for bank details account number
        if (req.body.bankDetails) {
            for (let i = 0; i < req.body.bankDetails.length; i++) {
                const element = req.body.bankDetails[i];

                // validation for bank details empty fields
                if (!element.bankName || element.bankName.length === 0) {
                    return res.status(403).json({ message: 'Bank Name is required' })
                }
                if (!element.beneficiaryName || element.beneficiaryName.length === 0) {
                    return res.status(403).json({ message: 'Beneficiary Name is required' })
                }

                if (!element.ifscCode || element.ifscCode.length === 0) {
                    return res.status(403).json({ message: 'IFSC Code required' })
                }
                 
                 
                 
                 if ( !/^[A-Z|a-z]{4}0[0-9]{6}$/i.test(element.ifscCode)) {

                    return res.status(403).json({ message: 'Invalid IFS Code' })
                }
               
                const existingBankAccount = await models.bankDetails.findOne({
                    where: {
                        accountNumber: element.accountNumber,
                        userId: { [Op.not]: req.userData.id }
                    }
                })
                if (existingBankAccount) {
                    res.status(403).json({ message: 'Account Number already exists!' })
                }
                
             }
        }

        await sequelize.transaction(async (t) => {
            data = await models.users.update(
                { name, email, mobile, password: hash }, { where: { id: getUser.userId } },
                { transaction: t }
            )
            updateNgo = await models.ngo.update(
                { address, registrationDate, registrationNumber, landline, panCard, panNumber, certificate, charityRegistrationCertificate, logo, deed, isKyc }, { where: { id } },
                { transaction: t }
            )

            for(let element of bankDetails){
                const existingBankAccount = await models.bankDetails.findOne({
                    where: {
                        accountNumber: element.accountNumber,
                        ifsc:element.ifsc,
                        userId: req.userData.id
                    }
            })
            if(existingBankAccount){
                await models.bankDetails.update({bankName:element.bankName,accountNumber:element.accountNumber,beneficiaryName:element.beneficiaryName,ifsc:element.ifsc},
                   { where:{id:existingBankAccount.id}},
                   { transaction: t });  
            }
        }
        })
        if (data == [0] || updateNgo == [0]) {
            return res.status(401).json({ message: " Failed to create NGO." })
        } else {
            return res.status(201).json({ message: "Ngo Updated successfully." })
        }
    }
    catch (err) {
        console.log(err);
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
    // includeArray = [
    //     { 
    //         model: models.users,
    //          as: 'user'
    //     },
    //     { 
    //         model: models.projects 
    //     },
    // ]
    //SEARCH QUERY
    const searchQuery = {
        [Op.and]: [query, {
            [Op.or]: {
                address: { [Op.like]: '%' + search + '%' },
                landline: { [Op.like]: '%' + search + '%' },
                registrationNumber: { [Op.like]: '%' + search + '%' },
                landline: { [Op.like]: '%' + search + '%' },
                panNumber: { [Op.like]: '%' + search + '%' },
                '$user.email$' : { [Op.like]:'%'+ search + '%' },
                '$user.name$' : {[Op.like]: '%' + search +'%' }
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
         attributes : ['id','userId','address'],
        limit: pageSize,
        offset: offset,
         where: searchQuery, 
         subQuery:false,
         include: [
            {
                model: models.users,
                as: 'user',
                subQuery:false,
                attributes: ['id', 'name', 'email', 'isActive']
            },
            {
                model: models.projects,
                attributes: ['id','title','slogan','isActive']
            },
        ],
        //  include : includeArray,
        // where: searchQueryForUser,
        order: [
            ['id', 'DESC']
        ]
    });

        for (let i = 0; i < data.length; i++) {
            let projectActiveCount = 0
            let projectDeactiveCount = 0
            const element = data[i];
            for (let j = 0; j < element.projects.length; j++) {
                const singleProject = element.projects[j];
                if (singleProject.isActive) {
                    projectActiveCount++;
                } else {
                    projectDeactiveCount++;
                }
            }
            data[i].dataValues.projectActiveCount = projectActiveCount
            data[i].dataValues.projectDeactiveCount = projectDeactiveCount
        }

    if (data.length == 0) {
        return res.status(404).json({
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
            as :'user',
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

//update ngo kyc
exports.updateNgoKyc = async (req, res) => {
    const { isKyc } = req.body;
    const id = req.params.id;

    const findNgo = await models.ngo.findOne({ where: { id: id } });

    if (!findNgo) {
        return res.status(404).json({ message: "Ngo not found" });
    }
    if (findNgo.isKyc) {
        return res.status(400).json({ message: "Kyc already approved" });
    }

    const updateNgo = await models.ngo.update({ isKyc: isKyc }, { where: { id: id } });

    if (updateNgo[0] == 0) {
        return res.status(200).json({ message: "Kyc not updated" });
    } else {
        return res.status(200).json({ message: "kyc updated successfully" });
    }
}