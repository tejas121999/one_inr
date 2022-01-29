module.exports = (sequelize, DataTypes) => {
    const CronType = sequelize.define('cronType', {
        // attributes
        type: {
            type: DataTypes.STRING,
            field: 'type',
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            defaultValue: true,
        }
    }, {
        freezeTableName: true,
        allowNull: false,
        tableName: 'cron_type',
    });
    return CronType;
}