module.exports = (sequelize,DataTypes)=>{
    const UserOtp = sequelize.define('userOtp',{
        mobile: {
            type : DataTypes.STRING,
            field: 'mobile_number'
        },
        email:{
            type:DataTypes.STRING,
            field:'email_id'
        },
        otp : {
            type: DataTypes.STRING,
            field: 'otp'
        },
        referenceCode: {
            type:  DataTypes.STRING,
            field: 'reference_code'
        },
        expiryTime : {
            type: DataTypes.DATE,
            field: 'expiry_time'
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            field: 'is_verified'
        },
       
    },{
        freezeTableName : true,
        tableName: 'userOtp',

    });

    return UserOtp
}



