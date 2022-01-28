module.exports = (sequelize, DataTypes) => {
    const CronLogger = sequelize.define('cronLogger', {
        // attributes
        cronTypeId: {
            type: DataTypes.INTEGER,
            field: 'cron_type_id',
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            field: 'date',
            allowNull: false,
        },
        startTime: {
            type: DataTypes.DATE,
            field: 'start_time',
            allowNull: false,
        },
        endTime: {
            type: DataTypes.DATE,
            field: 'end_time',
            allowNull: false,
        },
        processingTime: {
            type: DataTypes.STRING,
            field: 'processing_time',
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            field: 'status',
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            field: 'message',
        },
        notes: {
            type: DataTypes.TEXT,
            field: 'notes',
        },
    }, {
        freezeTableName: true,
        allowNull: false,
        tableName: 'cron_logger',
        timestamps: false
    });

    CronLogger.associate = (models) => {
        CronLogger.belongsTo(models.cronType, { foreignKey: 'cron_type_id', as: 'cron_type' });
    }
    return CronLogger;
}