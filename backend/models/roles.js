module.exports = (sequelize,DataTypes)=>{
    const roles = sequelize.define('roles',{
        name:{
            type: DataTypes.STRING,
            field : 'name'
        }, 
        
    },    {
        freezeTableName: true,
        tableName: 'roles',
        paranoid : true,
        deletedAt : 'deleted_at'
    })
    return roles
}