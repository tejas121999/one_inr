const models = require("../../models")


exports.addVendor = async (req,res) => {
        let { name, email, phone, gst, pan, address, company, panImage,gstImage } = req.body;
        
        let vendors = await models.vendors.create({name, email, phone, gst, pan, address, company, panImage,gstImage})
        if(!vendors){
            return res.status(402).json({
                message : "failed to create vendor"
            })
        }
        return res.status(200).json({
            message : "Vendor Created"
        })   
}