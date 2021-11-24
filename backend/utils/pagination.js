<<<<<<< HEAD
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
=======
const check = require('../lib/checkLib');


let paginationWithFromTo = (searchParameter, fromParameter, toParameter) => {
    let search = check.isEmpty(searchParameter) ? "" : searchParameter;
    let from = check.isEmpty(fromParameter) ? 1 : fromParameter;
    let to = check.isEmpty(toParameter) ? 1000 : toParameter;
    let pageSize = Number((to - from) + 1);
    let offset = Number(from - 1);
    return { search, offset, pageSize };
}

let paginationWithPageNumberPageSize = (searchParameter, pageNumberParameter, pageSizeParameter) => {
    let search = check.isEmpty(searchParameter) ? "" : searchParameter;
    let pageNumber = !check.isEmpty(pageNumberParameter) ? pageNumberParameter : 1;
    let pageSize = pageSizeParameter || 25;
    if (pageSize != 0 && pageNumber != 0) {
        userOffset = (pageSize * (pageNumber - 1));
    }
    return { search, userOffset, pageSize, pageNumber };
}

let NextAndPrevPageNumber = (pageNumberParameter, pageSizeParameter, userCount) => {
    let currentObject = pageNumberParameter * pageSizeParameter;
    let prev = currentObject == pageSizeParameter ? null : Number(pageNumberParameter) - 1;
    let next = currentObject >= userCount ? null : Number(pageNumberParameter) + 1;
    let lastPage = Math.ceil(userCount / pageSizeParameter);

    return { next, prev, lastPage };

}

module.exports = {
    paginationWithFromTo: paginationWithFromTo,
    paginationWithPageNumberPageSize: paginationWithPageNumberPageSize,
    NextAndPrevPageNumber: NextAndPrevPageNumber
}
>>>>>>> 58d15fd5d671b687653f707ad435391b8887e880
