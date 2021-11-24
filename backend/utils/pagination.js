const db = require('../models');
const pageskip =(parseInt(pagenumber)-1)*parseInt(pagelimit)
const {pagenumber, pagelimit} = xyz;
const abc = {
    offset:pageskip,
    limit:parseInt(pagelimit)
}

// exports.getAllUsersReceipts = async (req, res) => {
//     try {
//         let usersReceipts = await db.usersReceipts.findAndCountAll(
//             {
//                 limit: 1, //number of records per page
//                 offset: 1,
//                 attributes: [
//                     'id',
//                     'user_id',
//                     'interval_id',
//                     'receipt_number',
//                     'ngo_id',
//                     'transaction_type',
//                     'branch',
//                     'createdAt'
//                 ],

//             }

//         )

//         return res.status(200).json({ 'result': usersReceipts });

//     } catch (error) {
//         console.log(error)
//         return res.status(500).send('Internal Server Error');
//     }
// }


exports.getAllUsersReceipts = async (req, res) => {
    try {
        let usersReceipts = await db.usersReceipts.findAndCountAll(
            {
                offset:pageskip,
                limit:parseInt(pagelimit)
            }

        )

        return res.status(200).json({ 'result': usersReceipts });

    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}


const Pagination = (xyz) => {
    const {pagenumber, pagelimit} = xyz;
        const pageskip =(parseInt(pagenumber)-1)*parseInt(pagelimit)
        const abc = {
            offset:pageskip,
            limit:parseInt(pagelimit)
        }
        return abc;
    }