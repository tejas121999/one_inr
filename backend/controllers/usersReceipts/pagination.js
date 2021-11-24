const db = require('../../models');

exports.getAllUsersReceipts = async (req, res) => {
    try {
        let usersReceipts = await db.usersReceipts.findAndCountAll(
            {
                limit: 1, //number of records per page
                offset: 1,
                attributes: [
                    'id',
                    'user_id',
                    'interval_id',
                    'receipt_number',
                    'ngo_id',
                    'transaction_type',
                    'branch',
                    'createdAt'
                ],

            }

        )

        return res.status(200).json({ 'result': usersReceipts });

    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}