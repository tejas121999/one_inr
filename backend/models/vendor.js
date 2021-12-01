module.exports = (sequelize,DataTypes)=>{
    const Vendor = sequelize.define('vendors',{
        name:{
            type: DataTypes.STRING,
            field : 'name'
        },
        email:{
            type : DataTypes.STRING,
            field : 'email'
        },
        phone:{
            type: DataTypes.STRING,
            field : 'phone'
        },
        gst:{
            type: DataTypes.STRING,
            field : 'gst'
        },
        pan:{
            type: DataTypes.STRING,
            field : 'pan'
        },
        address:{
            type: DataTypes.TEXT,
            field : 'address'
        },
        company:{
            type: DataTypes.STRING,
            field : 'company'
        },
        panImage:{
            type: DataTypes.TEXT,
            field: 'pan_image'
        },
        gstImage:{
            type: DataTypes.TEXT,
            field: 'gst_image'
        },
        deletedAt:{
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
        
    },{
        freezeTableName: true,
        tableName: 'vendors',
        timestamps: false
    })
    return Vendor
}