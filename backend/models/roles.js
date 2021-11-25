module.exports = (sequelize,DataTypes)=>{
    const roles = sequelize.define('roles',{
        name:{
            type: DataTypes.STRING,
            field : 'name'
        },
    },    {
        freezeTableName: true,
        tableName: 'roles'
    })
    return roles
}