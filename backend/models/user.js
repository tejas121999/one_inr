module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('users',{
        name : {
            type : DataTypes.STRING,
            field: 'name'
        },
        email : {
            type: DataTypes.STRING,
            field: 'email'
        },
        mobile: {
            type:  DataTypes.BIGINT,
            field: 'mobile'
        },
        IMEI : {
            type: DataTypes.STRING,
            field: 'IMEI'
        },
        osType: {
            type: DataTypes.STRING,
            field: 'os_type'
        },
        balance:{
            type: DataTypes.BIGINT,
            field: 'balance'

        },
        razorpayPaymentId :{
            type: DataTypes.STRING,
            field: 'razorpay_payment_id'
        },
        razorpayPaymentDate:{
            type: DataTypes.DATE,
            field: 'razorpay_payment_date'
        },
        plan:{
            type: DataTypes.INTEGER,
            field: 'plan'
        },
        roleId:{
            type: DataTypes.INTEGER,
            field: 'role_id',
            defaultValue: '3'
        },
        emailVerifiedAt:{
            type: DataTypes.DATE,
            field: 'email_verified_at'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        },
        invoiceId: {
            type: DataTypes.INTEGER,
            field: 'invoice_id'
        },
        profileImage:{
            type: DataTypes.STRING,
            field: 'profile_image'
        },
        authKey:{
            type: DataTypes.STRING,
            field: 'auth_key'
        },
        rememberToken:{
            type: DataTypes.STRING,
            field: 'remember_token'
        },
        parentId:{
            type: DataTypes.INTEGER,
            field: 'parent_id',
            defaultValue: 0
        },
        createdAt : {
            type: DataTypes.DATE,
            field : 'created_at'
        },
        updatedAt : {
            type: DataTypes.DATE,
            field : 'updated_at'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        isPriyank:{
            type: DataTypes.ENUM(),
            values : ['false','true'],
            defaultValue: 'false',
            field: 'is_priyank',
        },
        balanceRenewalDate:{
            type: DataTypes.DATE,
            field: 'balance_renew_date'
        },
        balanceNextRenewDate:{
            type: DataTypes.DATE,
            field: 'balance_next_renew_date'
        }


    },{
        freezeTableName : true,
        tableName: 'users',
        timestamps: false
    });
    users.associate = function(models){
        users.hasOne(models.users,{foriegnkey: "parentId"})
        users.belongsTo(models.users,{foriegnkey : "parentId" })

    }


    return users
}



