const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const bankDetails = sequelize.define('bankDetails', {
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },

        bankName: {
            type: DataTypes.STRING,
            field: 'bank_name',
            allowNull: false
        },

        accountNumber: {
            type: DataTypes.BIGINT,
            unique: true,
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
        tableName: 'bank_details',
        paranoid : true,
        deletedAt : 'deleted_at',
        timestamp: true
        
    })
    bankDetails.associate = function (models) {
        bankDetails.belongsTo(models.users,{foreignKey : 'userId'})
        // bankDetails.belongsTo(models.ngo,{foreignKey : 'ngoId'})
    }
    return bankDetails;
}
