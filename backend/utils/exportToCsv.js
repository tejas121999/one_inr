const fastCsv = require('fast-csv')
const path =require('path')
const models = require('../models')
const fs = require('fs')
//const { csvUpload } = require('../controllers/csvupload/csvUpload');


let exportsToCsv = async(Data,filePath,req,res)=>{
    // let data = await models.partners.findAll()
    // if(!data){
    //     return res.status(400).json({message : "Bad Request"})
    // }        
    //const userData = await models.partners.findAll();
    const fileName = `public/uploads/${filePath}${Date.now()}.csv`
    const downloadPath = `/uploads/${filePath}${Date.now()}.csv`
    const ws = fs.createWriteStream(fileName)
    const userDataValues = Data.map(ele => { return ele.dataValues });
    fastCsv
        .write(userDataValues,{headers:true})
        .pipe(ws)

    // fastCsv.parseFile(path.join(destination,file),{objectMode : true,delimiter: '^',headers :true})
    // .on('error',error=>reject(error))
    // .on('data',(row)=>{
    //     partnerArr.push(row)
    // })
    // .on('end',async (row)=>{

    //     const 
    // })
    // const  ws = fs.createWriteStream(`${__dirname}/${moment()}.csv`)

    // fastCsv.write(data,{headers : true}).on("finish",function(){
    //     res.send('Exported file Successfully..!')
    // }).pipe(ws)
    //   return res.status(200).json({message:"Success"})
    //return res.status(200).json({message : "User Data", result : data})
    return {downloadPath};

}

module.exports = {
    exportsToCsv
}