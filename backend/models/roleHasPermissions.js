module.exports = (sequelize, DataTypes) => {
    const RolePermission = sequelize.define('rolePermission', {
        // attributes
        roleId: {
            type: DataTypes.INTEGER,
            field: 'role_id'
        },
        permissions: {
            type: DataTypes.TEXT,
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
        tableName: 'roleHasPermission'
    });

    RolePermission.associate = function (models) {
        RolePermission.belongsTo(models.role, { foreignKey: 'roleId', as: 'role' });
        // RolePermission.belongsTo(models.permission, { foreignKey: 'permissionId', as: 'permission' });
    }

    return RolePermission;
}