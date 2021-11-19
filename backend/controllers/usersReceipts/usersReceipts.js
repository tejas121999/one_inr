const models = require("../../models")

//Creating A Users Receipts
exports.addusers_receipts = async (req, res) => {
    let {
        id,
        user_id,
        interval_id,
        project_id,
        receipt_number,
        receipt_pdf,
        ngo_id,
        amount,
        transaction_type,
        realization_no,
        realization_data,
        drawn_on_bank,
        branch,
        created_at,
        updated_at
    } = req.body;

    let users_receipts = await users_receipts.create(
    {   id,
        user_id,
        interval_id,
        project_id,
        receipt_number,
        receipt_pdf,
        ngo_id,
        amount,
        transaction_type,
        realization_no,
        realization_data,
        drawn_on_bank,
        branch,
        created_at,
        updated_at
    }
    )

    if(!users_receipts){
        return res.status(402).json({
            message: 'Failed to create Users Receipts'
        });
    } else {
        return res.status(200).json({
            message: 'Users Receipts created successfully'
        })
    }
}

//Updating Users Reciepts
exports.updateusers_receipts = async (req,res)=>{

    let users_receiptsId = req.params.id;

    console.log(`vendor id `,users_receiptsId)

    let { id,
        user_id,
        interval_id,
        project_id,
        receipt_number,
        receipt_pdf,
        ngo_id,
        amount,
        transaction_type,
        realization_no,
        realization_data,
        drawn_on_bank,
        branch,
        created_at,
        updated_at } = req.body;

    let users_receiptsExists = await models.users_receipts.findOne({where : {id: req.params.id}})

    if(!users_receiptsExists)
    {
        return res.status(402).json({
            message : "Users Receipts does not exists"
        })
    }

    let users_receiptsUpdate = await models.users_receipts.update(
    {   id,
        user_id,
        interval_id,
        project_id,
        receipt_number,
        receipt_pdf,
        ngo_id,
        amount,
        transaction_type,
        realization_no,
        realization_data,
        drawn_on_bank,
        branch,
        created_at,
        updated_at
    },
    {
        where : {id: users_receiptsId}})

    if(users_receiptsUpdate)
    {   
    return res.status(200).json({ messgae: `Users Receipts updated successfully` });
    }
    
}
