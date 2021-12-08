const models = require("../models")
const sequelize = models.Sequelize;
const Op = sequelize.Op;
const exportToCsv = require('../utils/exportToCsv')
const generatePdf = require('../utils/generatePdf')
const path = require('path')
var fs = require("fs");
const {paginationWithFromTo} = require('../utils/pagination')
const html = fs.readFileSync(path.join(__dirname, '..', 'utils', 'templates', 'vendor.html'), 'utf-8');

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
exports.getVenorById = async (req,res) => {
    let id = req.params.id;
    let data = await models.vendors.findOne({ where: { id: id }})
    if (!data) {
        return res.status(400).json({
            message: "Vendor does not exist"
        })
    }
    return res.status(200).json({
        data: data
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



exports.deleteVendor = async (req,res) => {
    let id = req.params.id
    let vendorExists = await models.vendors.findOne({ where: { id: id } })
    if (!vendorExists) {
        return res.status(400).json({
            message: "Vendor does not exists"
        })
    }

    let data = await models.vendors.destroy({ where: { id: id } })
    console.log(`data`, data)
    if (!data) {
        return res.status(204).json({
            message: "Failed to delete a Vendor"
        })
    }
    return res.status(200).json({
        message: "Vendor deleted scuccessfully."
    })
}

exports.generateVendorPdf = async (req,res) => {
    try {
        let vendorData = await models.vendors.findAll();
        if (!vendorData) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            generatePdf.pdfGenerator(vendorData, html)
            res.status(200).json({ message: 'Pdf Generated' });
        }
    } catch (err) {
        console.log(err);
    }
}

exports.generateVendorCsv = async (req,res) => {
    try{
        let vendorData = await models.vendors.findAll();
        if(!vendorData){
            res.status(404).json({message:'Data not found'})
        }else{
            console.log(vendorData)
            exportToCsv.exportsToCsv(vendorData,"",res)
            res.status(200).json({message:'Exported Data into CSV'})
        }
    }catch(err){
        console.log(err)
    }
}