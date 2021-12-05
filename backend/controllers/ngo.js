// const { DataTypes } = require('sequelize/types');
const models = require('../models');
const paginationFunc = require('../utils/pagination');
const sequelize = models.Sequelize
const Op = sequelize.Op;


//Creating ngo
exports.addNgo = async (req, res) => {
        let addNgo = await models.ngo.create({

            userId: req.body.userId,
            address: req.body.address,
            registrationDate: req.body.registrationDate,
            registrationNumber: req.body.registrationNumber,
            landline: req.body.landline,
            contacts: req.body.contacts,
            bankDetails: req.body.bankDetails, //JSON.stringify(req.body.bankDetails),
            panCard: req.body.panCard,
            panNumber: req.body.panNumber,
            certificate: req.body.certificate,
            charityRegistrationCertificate: req.body.charityRegistrationCertificate,
            dead: req.body.dead,
            logo: req.body.logo,
            signature: req.body.signature,            
            isKyc: req.body.isKyc
        }) 
        // const newNGO = addNgo.map((ele) => ele.bankDetails = JSON.str(ele.bankDetails))
        // console.log((addNgo));
        if (!addNgo) {
            return res.status(400).json({
                message: 'Failed to create NGO'
            })
        } else {
            return res.status(201).json({
                message: 'NGO created successfully'
            })
        }
}






//updating ngo
exports.updateNgo = async (req, res) => {
    let ngoId = req.params.id;

    let ngoExists = await models.ngo.findOne(
        { where: { id: ngoId } })
        
        if (!ngoExists) {
            return res.status(402).json({
                message: "Ngo Does not exists!"
            })
        }
        

let ngoUpdate = await models.ngo.update(
    {
        userId: req.body.userId,
        address: req.body.address,
        registrationDate: req.body.registrationDate,
        registrationNumber: req.body.registrationNumber,
        landline: req.body.landline,
        contacts: req.body.contacts,
        bankDetails: req.body.bankDetails,
        panCard: req.body.panCard,
        panNumber: req.body.panNumber,
        certificate: req.body.certificate,
        charityRegistrationCertificate: req.body.charityRegistrationCertificate,
        dead: req.body.dead,
        logo: req.body.logo,
        signature: req.body.signature,
        isKyc: req.body.isKyc
    },

    {
        where: { id: ngoId }
    })

if (ngoUpdate) {
    return res.status(200).json({
        message: "Ngo Details Updated Successfuly"
    });
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
                address: { [Op.like]: search + '%' },
                landline: { [Op.like]: search + '%'},
                contacts: { [Op.like]: search + '%'},
                panNumber: { [Op.like]: search + '%'}
            },
        }],
    }

    var result = await models.ngo.findAndCountAll({
        limit: pageSize,
        offset: offset,
        where: searchQuery,
        order: [
            ['updatedAt', 'DESC']
        ]
    });

    // result = await models.ngo.findAll({})
    if (!result) {
        return res.status(400).json({
            message: "Failed to get all data."
        })
    }

    return res.status(200).json({
        result: result ,
        message: "Found All Data."
    })
}



//Delete NGO details
exports.deleteNgo = async (req, res) => {
    let id = req.params.id

    let ngoExists = await models.ngo.findOne({
        where: { id: id}
    })
    if(!ngoExists) {
        return res.status(400).json({
            message: "Ngo Details does not Exists..."
        })
    }

    let data = models.ngo.destroy({
        where: { id : id }
    })
    console.log('data', data)
    if(data) {
        return res.status(204).json({
            message: "NGO details deleted successfully..."
        })
    } else {
        res.status(400).json({
            message: err
        })
    }
    
}