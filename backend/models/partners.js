module.exports = (sequelize, DataTypes) => {
    const Partner = sequelize.define('partner', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone'
        },
        gst: {
            type: DataTypes.STRING,
            field: 'gst'
        },
        pan: {
            type: DataTypes.STRING,
            field: 'pan'
        },
        address: {
            type: DataTypes.TEXT,
            field: 'address'
        },
        company: {
            type: DataTypes.STRING,
            field: 'company'
        },
        panImage: {
            type: DataTypes.TEXT,
            field: 'pan_image'
        },
        gstImage: {
            type: DataTypes.TEXT,
            field: 'gst_image'
        },

    }, {

        freezeTableName: true,
        tableName: 'partners',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true,
    })
    return Partner
}