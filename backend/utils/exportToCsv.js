const fastCsv = require('fast-csv')
const path =require('path')
const models = require('../models')
const fs = require('fs')
//const { csvUpload } = require('../controllers/csvupload/csvUpload');


let exportsToCsv = async(req,res)=>{
    // let data = await models.partners.findAll()
    // if(!data){
    //     return res.status(400).json({message : "Bad Request"})
    // }        
    const userData = await models.partners.findAll();
    console.log(userData)
    const ws = fs.createWriteStream("public/data.csv")
    const userDataValues = userData.map(ele => { return ele.dataValues });
    fastCsv
        .write(userDataValues,{headers:true})
        .on('finish',function(){
            res.send('send')
        })
        .pipe(ws)

    // const CSV_STRING=[
    //     '1\firstName',
    //     '2\astName',
    //     '3\mobile',
    //     '4\email',
    //     '5\panImage',
    //     '6\panNumber',
    //     '7\gstNumber',
    //     '8\gstImage',
    //     '9\company',
    //     '10\Address'
    // ].join(EOL)


    // const stream =parse({delimiter:'\t'})
    // .on('error',(error) => console.log(error))
    // .on('data',(row) => console.log(row))
    // .on('end',(rowCount) => console.log(rowCount))

    // stream.write(CSV_STRING);
    // stream.end();




    // fastCsv.parseFile(path.join(destination,file),{objectMode : true,delimiter: '^',headers :true})
    // .on('error',error=>reject(error))
    // .on('data',(row)=>{
    //     partnerArr.push(row)
    // })
    // .on('end',async (row)=>{

    //     const 
    // })
    // console.log(__dirname)
    // const  ws = fs.createWriteStream(`${__dirname}/${moment()}.csv`)

    // fastCsv.write(data,{headers : true}).on("finish",function(){
    //     res.send('Exported file Successfully..!')
    // }).pipe(ws)
    //   return res.status(200).json({message:"Success"})
    //return res.status(200).json({message : "User Data", result : data})


}

module.exports = {
    exportsToCsv
}