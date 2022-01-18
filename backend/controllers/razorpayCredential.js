const models = require('../models')

//Add Razopar Credientials
exports.addRazorpayCredentials = async (req, res) => {
    let { key_id, key_secret, status } = req.body;
    let razorpayCredentials = await models.razorpaycredentials.create({ key_id, key_secret, status })
    if (!razorpayCredentials) {
        return res.status(400).json({ message: 'Failed to Add Data' })
    }
    return res.status(200).json({ message: 'Razorpay Credentials Added Successfully', result: razorpayCredentials })
}
//Get all Razorpay credientials
exports.razorpayCredentials = async (req, res) => {
    let razorpayCredentials = await models.razorpaycredentials.findAll()
    if (!razorpayCredentials) {
        return res.status(404).json({ message: 'Data Not found' })
    }
    return res.status(200).json({ message: 'razorpayCredentials', result: razorpayCredentials })
}
//Update Razorpay credentials.
exports.updateRazorpayCredentials = async (req, res) => {
    const {key_id,key_secret,status } = req.body;
    let id = req.params.id;
    let razorpayCredentials = await models.razorpaycredentials.findOne({ where: { id: id } })
    if (!razorpayCredentials) {
        return res.status(404).json({ message: 'Data does not exist.' })
    }
    let data = await models.razorpaycredentials.update({key_id,key_secret,status},{ where: {id} })
    if(data==[0]){
        res.status(400).json({
            message : "Already Updated"
        })
    }else{
        res.status(201).json({
            message : "Updated Successfully.",
            data : data,
        })
    }

}
exports.getRazorpayCredentialsById = async (req,res) => {
    let id = req.params.id;
    let razorpayCredentials = await models.razorpaycredentials.findOne({where :{id} })
    if (!razorpayCredentials) {
        return res.status(404).json({ message: 'Data Not found' })
    }else {
    return res.status(200).json({ message: 'razorpayCredentials', result: razorpayCredentials })
    }
}
