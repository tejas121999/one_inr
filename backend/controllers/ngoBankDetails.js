//adding Ngo bank details
const models = require('../models');
const sequelize = models.Sequelize;
const Op = sequelize.Op;

exports.addNgoBankDetails = async (req, res) => {

    try {
        let addNgoBankDetails = await models.ngoBankDetails.create({
            ngoId : req.body.ngoId,
            bankName: req.body.bankName,
            accountNumber: req.body.accountNumber,
            beneficiaryName: req.body.beneficiaryName,
            ifsc: req.body.ifsc
         }) 

         if (!addNgoBankDetails) {
             return res.status(400).json({
                 message: 'Failed to create NGO'
             })
         } 
             return res.status(201).json({
                 message: 'NGO created successfully'
         })
    } catch (error) {
        console.log(error)
    }


}