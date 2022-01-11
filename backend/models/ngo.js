const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const ngo = sequelize.define('ngo', {
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },

        address: {
            type: DataTypes.STRING,
            field: 'address'
        },

        registrationDate: {
            type: DataTypes.DATE,
            field: 'registration_date'
        },

        registrationNumber: {
            type: DataTypes.INTEGER,
            field: 'registration_number'
        },

        landline: {
            type: DataTypes.INTEGER,
            field: 'landline'
        },

        contacts: {
            type: DataTypes.STRING,
            field: 'contacts'
        },
        
        panCard: {
            type: DataTypes.STRING,
            field: 'pancard'
        },

        panNumber: {
            type: DataTypes.STRING,
            field: 'pan_number'
        },

        certificate: {
            type: DataTypes.STRING,
            field: 'certificate'
        },

        charityRegistrationCertificate: {
            type: DataTypes.STRING,
            field: 'charity_registration_certificate'
        },

        deed: {
            type: DataTypes.STRING,
            field: 'deed'
        },

        logo: {
            type: DataTypes.STRING,
            field: 'logo'
        },

        signature: {
            type: DataTypes.STRING,
            field: 'signature'
        },
        isKyc: {
            type: DataTypes.BOOLEAN,
            field: 'is_kyc'
        },
    },
    
    {
        freezeTableName: true,
        tableName: 'ngos',
        paranoid: true,
        deletedAt : 'deleted_at',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        timeStamp : true,
    });

    ngo.associate = function (models) {
        // ngo.hasMany(models.bankDetails,{foreignKey : 'userId'})
        ngo.hasMany(models.usersReceipts,{foreignKey : 'ngoId'})
        ngo.belongsTo(models.users,{foreignKey: 'userId'})
        

    }

    return ngo;
    
}

