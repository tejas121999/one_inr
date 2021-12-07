const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const ngo = sequelize.define('ngo', {
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },

        address: {
            type: DataTypes.INTEGER,
            field: 'address'
        },

        registrationDate: {
            type: DataTypes.INTEGER,
            field: 'registration_date'
        },

        registrationNumber: {
            type: DataTypes.INTEGER,
            field: 'registration_number'
        },

        landline: {
            type: DataTypes.STRING,
            field: 'landline'
        },

        contacts: {
            type: DataTypes.STRING,
            field: 'contacts'
        },

        bankDetails: {
            type: DataTypes.STRING,
            field: 'bank_details'
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

        dead: {
            type: DataTypes.STRING,
            field: 'dead'
        },

        logo: {
            type: DataTypes.STRING,
            field: 'logo'
        },

        signature: {
            type: DataTypes.STRING,
            field: 'signature'
        },

        // createdAt: {
        //     type: DataTypes.DATE,
        //     field: 'created_at'
        // },

        // updatedAt: {
        //     type: DataTypes.DATE,
        //     fied: 'updated_at'
        // },

        // deletedAt: {
        //     type: DataTypes.DATE,
        //     field: 'deleted_at'
        // },

        isKyc: {
            type: DataTypes.BOOLEAN,
            field: 'is_kyc'
        },

        // isActive: {
        //     type: DataTypes.BOOLEAN,
        //     field: 'is_active',
        //     default: true
        // }
    },
    
    {
        freezeTableName: true,
        tableName: 'ngos',
        timestamps: false
    });
    ngo.associate = function (models) {
        ngo.hasMany(models.ngoBankDetails,{foreignKey : 'ngoId'})
        ngo.hasMany(models.usersReceipts,{foreignKey : 'ngoId'})
        
    }

    return ngo;
    
}

