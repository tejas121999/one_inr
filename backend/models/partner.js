module.exports = (sequelize,DataTypes)=>{
    const partners = sequelize.define('partners',{
        name:{
            type:  DataTypes.STRING,
            field: 'name'
        },
        email : {
            type: DataTypes.STRING,
            field: 'email'
        },
        phone: {
            type:  DataTypes.STRING,
            field: 'phone'
        },
        gstNumber : {
            type : DataTypes.STRING,
            field : 'gst'
        },
        panNumber : {
            type : DataTypes.STRING,
            field : 'pan'
        },
        Address : {
            type : DataTypes.TEXT,
            field : 'address'
        },
        panImage : {
            type : DataTypes.TEXT,
            field : 'pan_image'
        },
        gstImage : {
            type : DataTypes.TEXT,
            field : 'gst_image'
        },
        companyName : {
            type : DataTypes.STRING,
            field : 'company'
        }
    },{
        freezeTableName : true,
        tableName: 'partners',
        paranoid : true,
        deletedAt : 'deleted_at',
        createdAt : 'created_at',
        updatedAt : 'updated_at'

     
    });

    return partners;
}



