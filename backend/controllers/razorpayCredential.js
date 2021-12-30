const models = require('../models')
const sequelize = models.Sequelize;




exports.addRazorpayCredentials = async (req, res) => {

    let {key_id,key_secret,status} = req.body;
    let razorpayCredentials = await models.razorpaycredentials.create({key_id,key_secret,status})
    if (!razorpayCredentials) {
        return res.status(400).json({ message: 'Failed to Add Data' })
    }
    return res.status(200).json({ message: 'Razorpay Credentials Added Successfully', result: razorpayCredentials })
}



exports.razorpayCredentials = async (req, res) => {

    let razorpayCredentials = await models.razorpaycredentials.findAll()
    if (!razorpayCredentials) {
        return res.status(404).json({ message: 'Data Not found' })
    }
    return res.status(200).json({ message: 'razorpayCredentials', result: razorpayCredentials })
}


exports.updateRazorpayCredentials = async (req,res)=> {
    let id = req.params.id;
    let razorpayCredentials = await models.razorpaycredentials.findOne({where : { id: id}})
    if(!razorpayCredentials){
        return res.status(404).json({message: 'Data Not found'})
    }

    let data = await models.razorpaycredentials.update({
        key_id: req.body.key_id,
        key_secret: req.body.key_secret,
        status: req.body.status
    },{where : {id: id}})

}

