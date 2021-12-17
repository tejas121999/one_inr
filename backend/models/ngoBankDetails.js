const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const ngoBankDetails = sequelize.define('ngoBankDetails', {
        ngoId: {
            type: DataTypes.INTEGER,
            field: 'ngo_id'
        },

        bankName: {
            type: DataTypes.STRING,
            field: 'bank_name',
            allowNull: false
        },

        accountNumber: {
            type: DataTypes.BIGINT,
            field: 'account_number',
            allowNull: false
        },

        beneficiaryName: {
            type: DataTypes.STRING,
            field: 'beneficary_name',
            allowNull: false
        },

        ifsc: {
            type: DataTypes.STRING,
            field: 'ifsc',
            allowNull: false
        }
    },

    {
        freezeTableName: true,
        tableName: 'ngo_bank_details',
        paranoid : true,
        deletedAt : 'deleted_at',
        timestamp: true
        
    })
    ngoBankDetails.associate = function (models) {
        ngoBankDetails.belongsTo(models.ngo,{foreignKey : 'ngoId'})
    }
    return ngoBankDetails
}
