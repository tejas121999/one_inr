module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('role', {
        // attributes
        roleName: {
            type: DataTypes.STRING,
            field: 'role_name',
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            field: 'description',
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            defaultValue: true,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            field: 'created_by',
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            field: 'updated_by',
        },
    }, {
        freezeTableName: true,
        allowNull: false,
        tableName: 'role',
    });

 

    Role.associate = function(models) {
        // Role.hasMany(models.rolePermission,{foreignKey : 'roleId', as:'role'});
        Role.hasOne(models.users,{foreignKey : 'roleId'})
        // Role.belongsToMany(models.user,{through: models.userRole});
        // Role.belongsToMany(models.module,{through: models.roleModule});
        // Role.belongsToMany(models.permission,{through: models.rolePermission});
        // Role.belongsTo(models.user,{ foreignKey: 'createdBy', as: 'createdByUser' });
        // Role.belongsTo(models.user,{ foreignKey: 'updatedBy', as: 'updatedByUser' });
    }

    return Role;
}