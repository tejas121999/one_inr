const models = require("../../models")

//Creating A Vendor 
exports.addVendor = async (req,res) => {
        let { name, email, phone, gst, pan, address, company, panImage,gstImage } = req.body;
        
        let vendors = await models.vendors.create({name, email, phone, gst, pan, address, company, panImage,gstImage})
        if(!vendors){
            return res.status(402).json({
                message : "failed to create vendor"
            })
        }
        return res.status(200).json({
            message : "Vendor created successfully"
        })   
}
//Get All Vendors
// exports.getAllVendor = async (req,res) => {
//     let allVendor = await models.vendors.findAndCountAll()
//     if(!allVendor){
//         return
//     }
// }

//Updating Vendor 
exports.updateVendor = async (req,res)=>{

    let vendorId = req.params.id;
    console.log(`vendor id `,vendorId)
    let { name, email, phone, gst, pan, address, company, panImage,gstImage } = req.body;

    let vendorExists = await models.vendors.findOne({where : {id: req.params.id}})
    if(!vendorExists){
        return res.status(402).json({
            message : "Vendor does not exists"
        })
    }

    let vendorUpdate = await models.vendors.update({name, email, phone, gst, pan, address, company, panImage,gstImage},{where : {id: vendorId}})
    if(vendorUpdate){   
    return res.status(200).json({ messgae: `Vendor updated successfully` });
    }
    
}
