module.exports = (sequelize,DataTypes)=>{
    const users = sequelize.define('users',{
        name : {
            type : DataTypes.STRING,
            field: 'name'
        },
        email : {
            type: DataTypes.STRING,
            unique : true,
            field: 'email'
        },
        mobile: {
            type:  DataTypes.BIGINT,
            unique : true,
            field: 'mobile'
        },
        IMEI : {
            type: DataTypes.STRING,
            unique : true,
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
            type: DataTypes.TEXT,
            field: 'remember_token'
        },
        parentId:{
            type: DataTypes.INTEGER,
            field: 'parent_id',
            defaultValue: 0,
        },
        createdAt : {
            type: DataTypes.DATE,
            field : 'created_at'
        },
        updatedAt : {
            type: DataTypes.DATE,
            field : 'updated_at'
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            defaultValue : 0
        },
        balanceRenewalDate:{
            type: DataTypes.DATE,
            field: 'balance_renew_date'
        },
        balanceNextRenewDate:{
            type: DataTypes.DATE,
            field: 'balance_next_renew_date'
        },
        isActive :{
            type : DataTypes.BOOLEAN,
            field: 'is_active',
            defaultValue: true
        }
    },{
        freezeTableName : true,
        tableName: 'users',
        timestamps: false,
        paranoid : true,
        deletedAt : 'deleted_at'
    });

    users.associate = function (models) {
        users.hasMany(models.usersReceipts, {foreignKey : 'userId'}),
        users.hasMany(models.bankDetails,{foreignKey:'userId'})
        users.belongsTo(models.role,{foreignKey : 'roleId'})

        // users.hasOne(models.users,{foreignKey : 'parentId'})
        // users.belongsTo(models.users,{foreignKey : 'parentId'})
        users.hasOne(models.ngo,{foreignKey: 'userId'})


        // usersReceipts.belongsTo(models.ngo, {foreignKey : 'ngo_id'}),
        // usersReceipts.belongsTo(models.projects, {foreignKey : 'project_id'})
    }


    return users
}



