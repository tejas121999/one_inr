const models = require('../models');
const { paginationWithFromTo } = require('../utils/pagination');
const sequelize = models.Sequelize
const Op = sequelize.Op;

//Creating ngo
exports.addNgo = async (req, res) => {
    try {
        let addNgo = await models.ngo.create({
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
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt,
            deletedAt: req.body.deletedAt,
            isKyc: req.body.isKyc
        })
        if (!ngo) {
            return res.status(402).json({
                message: 'Failed to create Users Receipts'
            })
        } else {
            return res.status(200).json({
                message: 'Users Receipts created successfully'
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err })
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
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        deletedAt: req.body.deletedAt,
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


