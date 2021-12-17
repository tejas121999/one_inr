const projects = require("./projects");

module.exports = (sequelize, Datatypes) => {
    const projectImages = sequelize.define('project_images', {

        projectId: {
            type: Datatypes.INTEGER,
            field: 'project_id'        
        },

        projectImage: {
            type: Datatypes.STRING,
            field: 'name'
        },

        ImageType: {
            type: Datatypes.STRING,
            field: 'image_type'
        },
    },
    {
        freezeTableName: true,
        tableName: 'project_images',
        paranoid: true,
        timestamp: true,
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at'
    });

    // projectImages.associate = function(models) {
    //     project_images.belongsTo(models.projects, {foreignKey: 'project_id'})
    // }
    return projectImages
}