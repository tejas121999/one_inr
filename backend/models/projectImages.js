const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const projectImages = sequelize.define('project_image', {
        projectId: {
            type: DataTypes.INTEGER,
            field: 'project_id'
        },
        banner: {
            type: DataTypes.STRING,
            field: 'banner'
        },
        cover: {
            type: DataTypes.STRING,
            field: 'cover'
        },
        mobile: {
            type: DataTypes.STRING,
            field: 'mobile'
        },
        slider1: {
            type: DataTypes.STRING,
            field: 'slider_1'
        },
        slider2: {
            type: DataTypes.STRING,
            field: 'slider_2'
        },
        slider3: {
            type: DataTypes.STRING,
            field: 'slider_3'
        },
        slider4: {
            type: DataTypes.STRING,
            field: 'slider_4'
        },
        slider5: {
            type: DataTypes.STRING,
            field: 'slider_5'
        },
        slider6: {
            type: DataTypes.STRING,
            field: 'slider_6'
        }

    },
        {
            freezeTableName: true,
            tableName: 'project_image',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            paranoid: true,
            deletedAt: 'deleted_at',
            timestamp: true,
        }
    );
    projectImages.associate = function (models) {
        projectImages.belongsTo(models.projects, { foreignKey: 'projectId' })
    }
    return projectImages;
} 