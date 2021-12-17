const projects = require("./projects");

module.exports = (sequelize, Datatypes) => {
    const projectImages = sequelize.define('project_images', {

        projectId: {
            type: Datatypes.INTEGER,
            field: 'project_id'        
        },

        projectImage: {
            type: Datatypes.STRING,
            field: 'project_image',
            defaultValue: "hii"
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
        timestamp: true
    });

    // projectImages.associate = function(models) {
    //     project_images.belongsTo(models.projects, {foreignKey: 'project_id'})
    // }
    return projectImages
}