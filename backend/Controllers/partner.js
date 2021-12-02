const models = require('../models')
const generateAllUserExcel = require('../service/allPatnerExcel')
const generatePdf = require('../utils/generatePdf')
const path = require('path')
var fs = require("fs");
// const html = fs.readFileSync(`${__dirname}`,'..','..','utils','demo.html', "utf8");
// const html = fs.readFileSync(`${__dirname}`,'..','..','utils','demo.html', "utf8");
// fs.readFileSync(path.join(__dirname, '..', 'templates', 'invoiceTemplate.html'), 'utf-8');
const html = fs.readFileSync(path.join(__dirname,'..','utils', 'templates','partner.html'), 'utf-8');


exports.addPartner = async (req,res)=>{
    let {firstName,lastName,mobile,email,gstNumber,panNumber,gstImage,panImage,companyName,Address} = req.body;

    let partner = await models.partners.create({firstName,lastName,mobile,email,gstNumber,panNumber,gstImage,panImage,companyName,Address})
    if(!partner){
        return res.status(400).json({message : 'Not able to create Partner'})
    }
    return res.status(200).json({message : 'Partner Created',result : partner})
}

exports.getPartner = async (req,res)=>{
    let partnerData = await models.partners.findAll();
    if(!partnerData){
        return res.status(404).json({message : 'Data Not Found'})
    }
    return res.status(200).json({message : 'Partner',result : partnerData})
}

exports.getPartnerExcel = async(req,res)=>{
    try{
        
    
    let partnerData = await models.partners.findAll();
    if (!partnerData) {
        res.status(404).json({ message: 'Data not found' });
    } else {
        generateAllUserExcel(partnerData,res)
    }
}catch(e){
    console.log(e)
}
}

exports.pdfOfPartner = async(req,res) =>{
    try{
        let partnerData = await models.partners.findAll();
        if(!partnerData){
            res.status(404).json({ message: 'Data not found' });
        }else{
            generatePdf.pdfGenerator(partnerData,html)
        }
    }catch(err){
        console.log(err);
    }
}


