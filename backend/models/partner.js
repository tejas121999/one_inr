module.exports = (sequelize,DataTypes)=>{
    const partners = sequelize.define('partners',{
        firstName : {
            type : DataTypes.STRING,
            field: 'first_name'
        },
        lastName : {
            type : DataTypes.STRING,
            field: 'last_name'
        },
        mobile: {
            type:  DataTypes.BIGINT,
            field: 'mobile'
        },
        email : {
            type: DataTypes.STRING,
            field: 'email'
        },
        gstNumber : {
            type : DataTypes.STRING,
            field : 'gst_number'
        },
        panNumber : {
            type : DataTypes.STRING,
            field : 'pan_number'
        },
        gstImage : {
            type : DataTypes.STRING,
            field : 'gst_image'
        },
        panImage : {
            type : DataTypes.STRING,
            field : 'pan_image'
        },
        companyName : {
            type : DataTypes.STRING,
            field : 'company_name'
        },
        Address : {
            type : DataTypes.STRING,
            field : 'address'
        }


    },{
        freezeTableName : true,
        tableName: 'partners',
        timestamps: false
    });

    return partners
}



