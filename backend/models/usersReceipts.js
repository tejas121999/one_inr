module.exports = (sequelize, DataTypes) => {
    const users_receipts = sequelize.define('users_receipts', {
        id: {
            type: DataTypes.INTEGER,
            field: 'id'
        },

        user_id: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        
        interval_id:{
            type: DataTypes.INTEGER,
            field: 'interval_id'
        },

        project_id: {
            type: DataTypes.INTEGER,
            field: 'project_id'
        },

        receipt_number: {
            type: DataTypes.VARCHAR,
            field: 'receipt_number'
        },

        reciept: {
            type: DataTypes.INTEGER,
            field: 'reciept'
        },

        ngo_id: {
            type: DataTypes.INTEGER,
            field: 'ngo_id'
        },

        amount: {
            type: DataTypes.INTEGER,
            field: 'amount'
        },

        transaction_type: {
            type: DataTypes.VARCHAR,
            field: 'transaction_type'
        },

        realization_no: {
            type: DataTypes.TEXT,
            field: 'realization_no'
        },

        realization_date: {
            type: DataTypes.DATE,
            field: 'realization_date'
        },

        drawn_on_bank: {
            type: DataTypes.DATE,
            field: 'drawn_on_bank'
        },

        branch: {
            type: DataTypes.TEXT,
            field: 'branch'
        },

        created_at: {
            type: DataTypes.DATETIME,
            field: 'created_at'
        },

        updated_at: {
            type: DataTypes.DATETIME,
            field: 'updated_at'
        },

    },{
        freezeTableName: true,
        tableName: 'users_receipts'
    })
    return users_receipts
}