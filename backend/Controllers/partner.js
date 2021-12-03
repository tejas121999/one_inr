const models = require('../models')
const generateAllUserExcel = require('../service/allPatnerExcel')
const generatePdf = require('../utils/generatePdf')
const path = require('path')
var fs = require("fs");
// const html = fs.readFileSync(`${__dirname}`,'..','..','utils','demo.html', "utf8");
// const html = fs.readFileSync(`${__dirname}`,'..','..','utils','demo.html', "utf8");
// fs.readFileSync(path.join(__dirname, '..', 'templates', 'invoiceTemplate.html'), 'utf-8');
const html = fs.readFileSync(path.join(__dirname, '..', 'utils', 'templates', 'partner.html'), 'utf-8');


exports.addPartner = async (req, res) => {
    let { name, mobile, email, gstNumber, panNumber, gstImage, panImage, companyName, Address } = req.body;

    let partner = await models.partners.create({ name, mobile, email, gstNumber, panNumber, gstImage, panImage, companyName, Address })
    if (!partner) {
        return res.status(400).json({ message: 'Not able to create Partner' })
    }
    return res.status(200).json({ message: 'Partner Created', result: partner })
}

exports.getPartner = async (req, res) => {
    let partnerData = await models.partners.findAll();
    if (!partnerData) {
        return res.status(404).json({ message: 'Data Not Found' })
    }
    return res.status(200).json({ message: 'Partner', result: partnerData })
}


exports.updatePatner = async (req, res) => {
    try{
        let userId = req.params.id;
    // let { firstName, lastName, mobile, email, gstNumber, panNumber, gstImage, panImage, companyName, Address } = req.body;
    let partnerData = await models.partners.findOne({ where: { id: userId } })
    console.log(partnerData);
    if (!partnerData) {
        return res.status(404).json({
            message: "Partner does not exists"
        })
    }
    let partnerUpdate = await models.partners.update({
        name : req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        gstNumber: req.body.gstNumber,
        panNumber: req.body.panNumber,
        gstImage: req.body.gstImage,
        panImage: req.body.panImage,
        companyName: req.body.companyName,
        Address: req.body.Address
    },
        {
            where: { id: userId }
        })
    console.log(partnerData)
    if (!partnerUpdate) {
        return res.status(404).json({
            message: "Failed to update partner"
        })
    }
    return res.status(200).json({ message: 'Partner Updated' })
    }catch(err){
        console.log(err)
    }
}

exports.deletePartner = async (req,res) => {
    let id = req.params.id

    let partnerExists = await models.partners.findOne({ where: { id: id } })
    if (!partnerExists) {
        return res.status(400).json({
            message: "Partners does not exist"
        })
    }
    let data = await models.partners.destroy({
        where : { id : id}
    })
    if (!data) {
        return res.status(204).json({
            message: "Failed to delete a Partner"
        })
    }
    return res.status(200).json({
        message: "Partner deleted scuccessfully."
    })
}

exports.getPartnerExcel = async (req, res) => {
    try {
        let partnerData = await models.partners.findAll();
        if (!partnerData) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            generateAllUserExcel(partnerData, res)
        }
    } catch (e) {
        console.log(e)
    }
}

exports.pdfOfPartner = async (req, res) => {
    try {
        let partnerData = await models.partners.findAll();
        if (!partnerData) {
            res.status(404).json({ message: 'Data not found' });
        } else {
            generatePdf.pdfGenerator(partnerData, html)
            res.status(200).json({ message: 'Pdf Generated' });
        }
    } catch (err) {
        console.log(err);
    }
}


