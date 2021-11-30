// // const { compareSync } = require("bcrypt");
// const { sequelize } = require("../../models");
// const models = require("../../models")
// const paginationFunc = require('../../utils/pagination');
// const Sequelize = models.Sequelize
// const Op = Sequelize.Op;

// //Creating A Users Receipts
// exports.addUsersReceipts = async (req, res) => {
    
//     try{
//     let {
//         userId,
//         intervalId,
//         projectId,
//         receiptNumber,
//         recieptPdf,
//         mailSend,
//         ngoId,
//         amount,
//         transactionType,
//         realizationNo,
//         realizationDate,
//         drawnOnBank,
//         branch,
    
//     } = req.body;
//     // console.log(req.body);

//     let usersReceipts = await models.usersReceipts.create({  

//         userId:req.body.userId,
//         intervalId:req.body.intervalId,
//         projectId:req.body.projectId,
//         receiptNumber:req.body.receiptNumber,
//         recieptPdf:req.body.receiptPdf,
//         mailSend:req.body.mailSend,
//         ngoId:req.body.ngoId,
//         amount:req.body.amount,
//         transactionType:req.body.transactionType,
//         realizationNo:req.body.realizationNo,
//         realizationDate:req.body.realizationDate,
//         drawnOnBank:req.body.drawnOnBank,
//         branch:req.body.branch
        
//     }
//     )

//     if(!usersReceipts){
//         return res.status(402).json({
//             message: 'Failed to create Users Receipts'
//         })
//     } else {
//         return res.status(200).json({
//             message: 'Users Receipts created successfully'
//         })
//     }
//     }catch(err){
//         console.log(err);
//         return res.status(400).json({message:err})
//     }
    
// }

// //Updating Users Reciepts
// exports.updateUsersReceipts = async (req,res)=>{

//     let usersReceiptsId = req.params.id;

//     console.log(`usersReceipts id `,usersReceiptsId)

//     let { 
//         userId,
//         intervalId,
//         projectId,
//         receiptNumber,
//         recieptPdf,
//         mailSend,
//         ngoId,
//         amount,
//         transactionType,
//         realizationNo,
//         realizationDate,
//         drawnOnBank,
//         branch
//      } = req.body;

//     let usersReceiptsExists = await models.usersReceipts.findOne({where : {id: usersReceiptsId}})

//     if(!usersReceiptsExists)
//     {
//         return res.status(402).json({
//             message : "Users Receipts does not exists"
//         })
//     }

//     let usersReceiptsUpdate = await models.usersReceipts.update(
//     {   
//         userId:req.body.userId,
//         intervalId:req.body.intervalId,
//         projectId:req.body.projectId,
//         receiptNumber:req.body.receiptNumber,
//         recieptPdf:req.body.receiptPdf,
//         mailSend:req.body.mailSend,
//         ngoId:req.body.ngoId,
//         amount:req.body.amount,
//         transactionType:req.body.transactionType,
//         realizationNo:req.body.realizationNo,
//         realizationDate:req.body.realizationDate,
//         drawnOnBank:req.body.drawnOnBank,
//         branch:req.body.branch
//     },
//     {
//         where : {id: usersReceiptsId}
//     })

//     if(usersReceiptsUpdate)
//     {   
//     return res.status(200).json({ messgae: `Users Receipts updated successfully` });
//     }
    
// }


// //Get all details of all Users of View Reciepts in DB

// exports.getAllUserReceipts = async (req, res) => {
//     let query = {};
//     //paginantion 

//     const { search, offset, pageSize } = paginationFunc.paginationWithFromTo(
//         req.query.search,
//         req.query.from,
//         req.query.to
//     ) 
//     // Search query
//     const searchQuery = {
//         [Op.and]: [query, {
//             [Op.or]: {
//                 receiptNumber: { [Op.like]: search + '%' },
//                 amount: { [Op.iLike]: search + '%' },
//                 transactionType: { [Op.like]: search + '%' },
//                 realizationNo: { [Op.like]: search + '%' },
//                 realizationDate: { [Op.like]: search + '%' },
//                 transactionType: { [Op.like]: search + '%' },
//                 branch: { [Op.iLike]: search + '%' },
//             },
//         }],
//     }

//     const data = await models.usersReceipts.findAndCountAll({
//         limit: pageSize,
//         offset: offset
//     });

    

//     if(!data) {
//         return res.status(400).json({
//             message: "Failed to get all data."
//         })
//     }

//     return res.status(200).json({
//         data: data,
//         message: "Found All Data." 
//     })
// }


