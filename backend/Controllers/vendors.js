const models = require("../models")
const sequelize = models.Sequelize;
const Op = sequelize.Op;
const {paginationWithFromTo} = require('../utils/pagination')
//Creating A Vendor 
exports.addVendor = async (req, res) => {
    let { name, email, phone, gst, pan, address, company, panImage, gstImage } = req.body;

    let vendors = await models.vendors.create({ name, email, phone, gst, pan, address, company, panImage, gstImage })
    if (!vendors) {
        return res.status(402).json({
            message: "failed to create vendor"
        })
    }
    return res.status(200).json({
        message: "Vendor created successfully"
    })
}
// Get All Vendors
exports.getAllVendor = async (req, res) => {
    const { search, offset, pageSize } = paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    );
    let query = {};
    const searchQuery = {
        [Op.and]: [query, {
            [Op.or]: {
                name: { [Op.like]: search + "%" },
                email: { [Op.like]: search + '%' },
                phone: { [Op.like]: search + '%' },
                gst: { [Op.like]: search + '%' },
                pan: { [Op.like]: search + '%' },
                company: { [Op.like]: search + '%' },
            }
        }],
    };
    let allVendor = await models.vendors.findAll({
        where: searchQuery,
        offset: offset,
        limit: pageSize,
    })



    if (!allVendor) {
        return res.status(400).json({
            message: "Failed to get the Data ",
            error: error
        })
    }
    res.status(200).json({
        message: "Success",
        data: allVendor
    })

}

//Updating Vendor 
exports.updateVendor = async (req, res) => {

    let vendorId = req.params.id;
    let { name, email, phone, gst, pan, address, company, panImage, gstImage } = req.body;

    let vendorExists = await models.vendors.findOne({ where: { id: req.params.id } })
    if (!vendorExists) {
        return res.status(400).json({
            message: "Vendor does not exists"
        })
    }

    let vendorUpdate = await models.vendors.update({ name, email, phone, gst, pan, address, company, panImage, gstImage }, { where: { id: vendorId } })
    if (vendorUpdate) {
        return res.status(201).json({ messgae: `Vendor updated successfully` });
    }

}
