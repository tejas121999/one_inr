module.exports = (sequelize, DataTypes) => {
    const Donations = sequelize.define('donations', {
        userId: {
            type : DataTypes.INTEGER,
            field : 'user_id',
            allowNull: false,
        },
        projectId : {
            type : DataTypes.INTEGER,
            field : 'project_id',
            allowNull: false,
        },
        projectIntervalId : {
            type : DataTypes.INTEGER,
            field : 'project_interval_id',
            allowNull: false,
        },
        status : {
            type : DataTypes.BOOLEAN,
            field : 'status',
            defaultValue : true,
        }
    }, {
        freezeTableName: true,
        allowNull: false,
        tableName: 'donations',
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        timeStamp : true,
    });
    return Donations;
}