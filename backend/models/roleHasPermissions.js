module.exports = (sequelize,DataTypes)=>{
    const roleHasPermissions = sequelize.define('role_has_permissions',{
        roleId : {
            type : DataTypes.INTEGER,
            field : 'role_id'
        },
        permissionId : {
            type : DataTypes.STRING,
            field: 'permission_id'
        }


    },
    {
        freezeTableName: true,
        tableName: 'role_has_permissions'
    })
    return roleHasPermissions
}