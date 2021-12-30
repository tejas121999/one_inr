module.exports = (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('rolePermission', {
        // attributes
        roleId: {
            type: DataTypes.INTEGER,
            field: 'role_id'
        },
        permissions: {
            type: DataTypes.STRING,
            field: 'permissions'
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            defaultValue: true,
        }
    }, {
        freezeTableName: true,
        allowNull: false,
        tableName: 'role_permission'
    });

    RolePermission.associate = function(models) {
        RolePermission.belongsTo(models.role, { foreignKey: 'roleId', as: 'role' });
        RolePermission.belongsTo(models.permission, { foreignKey: 'permissions' });
    }
    
    return RolePermission;
}