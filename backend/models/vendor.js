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
            field: 'pan_image',
            allowNull: true
        },
        gstImage:{
            type: DataTypes.TEXT,
            field: 'gst_image',
            allowNull: true
        },
  
    },{
        freezeTableName: true,
        tableName: 'vendors',
        paranoid : true,
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at',
    })
    return Vendor
}


