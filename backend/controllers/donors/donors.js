const models = require('../../models/index')

//Get all details of all donor in DB
exports.getAllDonor = async (req, res) => {
    const data = await models.users.findAndCountAll({})
    if (data) {
        return res.status(200).json({
            data: data,
            message: "Success",

        })
    }
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
    let id = req.params.id
    let data = await models.users.findByPk(id, { attributes: ['name', 'email', 'mobile', 'balance'] })
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
    let { name, number, email, plan, isPriyank, balanceNextRenewDate } = req.body;
    let donorExists = await models.users.findOne({ where: { id: id } })
    if (!donorExists) {
        return res.status(400).json({
            message: "Donor does not exists"
        })
    }

    let donorUpdate = await models.users.update({ name, number, email, plan, isPriyank, balanceNextRenewDate }, { where: { id: id } })
    if (!donorUpdate[0]) {
        return res.status(401).json({
            message: "Failed to update donor"
        })
    }
    console.log(donorUpdate)
    return res.status(200).json({
        message: "Donor Updated Successfully",
    })
}

exports.updateDonorBalance = async (req,res) => {
    let id = req.params.id
    let {balance} = req.body;

    let donorExists = await models.users.findOne({ where: { id: id } })
    if (!donorExists) {
        return res.status(400).json({
            message: "Donor does not exists"
        })
    }
    let donorUpdate = await models.users.update({balance},{where : {id : id}})
    console.log(`data`,donorUpdate)
    if(!donorUpdate[0]){
        return res.status(400).json({
            message : "Failed to update balance"
        })
    }
    return res.status(200).json({
        message : "User Balance Updated"
    })
}