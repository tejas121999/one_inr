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
        }

    },{
        freezeTableName : true,
        tableName: 'users'
    })
    return users
}