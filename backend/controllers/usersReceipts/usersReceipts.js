// const { compareSync } = require("bcrypt");
const models = require("../../models")

//Creating A Users Receipts
exports.addUsersReceipts = async (req, res) => {
    try{
    let {
        userId,
        intervalId,
        projectId,
        receiptNumber,
        recieptPdf,
        ngoId,
        amount,
        transactionType,
        realizationNo,
        realizationData,
        drawnOnBank,
        branch,
    
    } = req.body;
    // console.log(req.body);

    let usersReceipts = await models.usersReceipts.create({  

        userId:req.body.userId,
        intervalId:req.body.intervalId,
        projectId:req.body.projectId,
        receiptNumber:req.body.receiptNumber,
        recieptPdf:req.body.receiptPdf,
        ngoId:req.body.ngoId,
        amount:req.body.amount,
        transactionType:req.body.transactionType,
        realizationNo:req.body.realizationNo,
        realizationData:req.body.realizationData,
        drawnOnBank:req.body.drawnOnBank,
        branch:req.body.branch
        
    }
    )

    if(!usersReceipts){
        return res.status(402).json({
            message: 'Failed to create Users Receipts'
        })
    } else {
        return res.status(200).json({
            message: 'Users Receipts created successfully'
        })
    }
    }catch(err){
        console.log(err);
        return res.status(400).json({message:err})
    }
    
}

//Updating Users Reciepts
exports.updateUsersReceipts = async (req,res)=>{

    let usersReceiptsId = req.params.id;

    console.log(`usersReceipts id `,usersReceiptsId)

    let { 
        userId,
        intervalId,
        projectId,
        receiptNumber,
        recieptPdf,
        ngoId,
        amount,
        transactionType,
        realizationNo,
        realizationData,
        drawnOnBank,
        branch
     } = req.body;

    let usersReceiptsExists = await models.usersReceipts.findOne({where : {id: usersReceiptsId}})

    if(!usersReceiptsExists)
    {
        return res.status(402).json({
            message : "Users Receipts does not exists"
        })
    }

    let usersReceiptsUpdate = await models.usersReceipts.update(
    {   
        userId:req.body.userId,
        intervalId:req.body.intervalId,
        projectId:req.body.projectId,
        receiptNumber:req.body.receiptNumber,
        recieptPdf:req.body.receiptPdf,
        ngoId:req.body.ngoId,
        amount:req.body.amount,
        transactionType:req.body.transactionType,
        realizationNo:req.body.realizationNo,
        realizationData:req.body.realizationData,
        drawnOnBank:req.body.drawnOnBank,
        branch:req.body.branch
    },
    {
        where : {id: usersReceiptsId}
    })

    if(usersReceiptsUpdate)
    {   
    return res.status(200).json({ messgae: `Users Receipts updated successfully` });
    }
    
}

