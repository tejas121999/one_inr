module.exports = (sequelize, DataTypes) => {
    const razorpaycredentials = sequelize.define('razorpaycredentials', {
        key_id: {
            type: DataTypes.STRING,
            field: 'RAZORPAY_KEY'
        },
        key_secret: {
            type: DataTypes.STRING,
            field: 'RAZORPAY_SECRET'
        },
        status : {
            type: DataTypes.BOOLEAN,
            field: 'status'
        },
        createdAt : {
            type: DataTypes.DATE,
            field : 'created_at'
        },
        updatedAt : {
            type: DataTypes.DATE,
            field : 'updated_at'
        }
    },
        {
            freezeTableName: true,
            tableName: 'razorpaycredentials',
        })

    return razorpaycredentials;
}