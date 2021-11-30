const models = require('../models');
const paginantionFunc = require('../utils/pagination');
const Sequelize = models.Sequelize
const Op = Sequelize.Op;

//Creating A ngo
exports.addNgo = async (req, res) => {
    try {
        let addNgo = await models.ngo.create({
            userId: req.bodyy.userId,
            address: req.bodyy.address,
            registrationDate: req.bodyy.registrationDate,
            registrationNumber: req.bodyy.registrationNumber,
            landline: req.bodyy.landline,
            contacts: req.bodyy.contacts,
            bankDetails: req.bodyy.bankDetails,
            panCard: req.bodyy.panCard,
            panNumber: req.bodyy.panNumber,
            certificate: req.bodyy.certificate,
            charityRegistrationCertificate: req.bodyy.charityRegistrationCertificate,
            dead: req.bodyy.dead,
            logo: req.bodyy.logo,
            signature: req.bodyy.signature,
            createdAt: req.bodyy.createdAt,
            updatedAt: req.bodyy.updatedAt,
            deletedAt: req.bodyy.deletedAt,
            isKyc: req.bodyy.isKyc
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


//update ngo
exports.updateNgo = async (req, res) => {
    let ngoId = req.params.id;
    // console.log('ngo id', ngo);

    let ngoExists = await models.ngo.findOne(
        { where: { id: ngoId }} )}

        if(!ngoExists) {
            return res.status(402).json({
                message: "Ngo Does not exists!"
            })
        }

        let ngoUpdate = await models.ngo.update(
            {
                userId: req.bodyy.userId,
            address: req.bodyy.address,
            registrationDate: req.bodyy.registrationDate,
            registrationNumber: req.bodyy.registrationNumber,
            landline: req.bodyy.landline,
            contacts: req.bodyy.contacts,
            bankDetails: req.bodyy.bankDetails,
            panCard: req.bodyy.panCard,
            panNumber: req.bodyy.panNumber,
            certificate: req.bodyy.certificate,
            charityRegistrationCertificate: req.bodyy.charityRegistrationCertificate,
            dead: req.bodyy.dead,
            logo: req.bodyy.logo,
            signature: req.bodyy.signature,
            createdAt: req.bodyy.createdAt,
            updatedAt: req.bodyy.updatedAt,
            deletedAt: req.bodyy.deletedAt,
            isKyc: req.bodyy.isKyc
            }
        )
    