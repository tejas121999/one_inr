const sequelize = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const usersReceipts = sequelize.define('usersReceipts', {

        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        
        intervalId:{
            type: DataTypes.INTEGER,
            field: 'interval_id'
        },

        projectId: {
            type: DataTypes.INTEGER,
            field: 'project_id'
        },

        receiptNumber: {
            type: DataTypes.STRING,
            field: 'receipt_number'
        },

        recieptPdf: {
            type: DataTypes.STRING,
            field: 'receipt_pdf'
        },

        mailSend: {
            type: DataTypes.INTEGER,
            field: 'mail_send'
        },

        ngoId: {
            type: DataTypes.INTEGER,
            field: 'ngo_id'
        },

        amount: {
            type: DataTypes.INTEGER,
            field: 'amount'
        },

        transactionType: {
            type: DataTypes.STRING,
            field: 'transaction_type'
        },

        realizationNo: {
            type: DataTypes.TEXT,
            field: 'realization_no'
        },

        realizationDate: {
            type: DataTypes.DATE,
            field: 'realization_date'
        },

        drawnOnBank: {
            type: DataTypes.DATE,
            field: 'drawn_on_bank'
        },

        branch: {
            type: DataTypes.TEXT,
            field: 'branch'
        },

        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },

        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },

    },{
        freezeTableName: true,
        tableName: 'users_receipts'
    })
    return usersReceipts
}

// module.exports = sequelize.model('usersReceipts', usersReceipts);