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
            type:  DataTypes.STRING,
            field: 'mobile'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        },
        createdAt : {
            type: DataTypes.DATE,
            field : 'created_at'
        },
        updatedAt : {
            type: DataTypes.DATE,
            field : 'updated_at'
        }


    },{
        freezeTableName : true,
        tableName: 'users',
        timestamps: false
    })
    return users
}