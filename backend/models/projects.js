module.exports = (sequelize, DataTypes) => {
const projects = sequelize .define('projects', {

    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
    },

    title: {
        type: DataTypes.STRING,
        field: 'title',
        allowNull: false
    },

    slogan: {
        type: DataTypes.STRING,
        field: 'slug',
        
    },

    description: {
        type: DataTypes.STRING,
        field: 'description',
        allowNull: false
    },

    longDesc: {
        type: DataTypes.STRING,
        field: 'long_description'
    },

    videoLink: {
        type: DataTypes.STRING,
        field: 'video_link'
    },

    goal: {
        type: DataTypes.BIGINT,
        field: 'goal',
        allowNull: false
    },

    commission: {
        type: DataTypes.INTEGER,
        field: 'commission',
        allowNull: false
    },

    target: {
        type: DataTypes.INTEGER,
        field: 'target',
        allowNull: false
    },

    funded: {
        type: DataTypes.INTEGER,
        filed: 'funded'
    },

    startDate: {
        type: DataTypes.DATE,
        field: 'start_date'
    },

    endDate: {
        type: DataTypes.DATE,
        field: 'end_date'
    },

    recurringDays: {
        type: DataTypes.INTEGER,
        field: 'recurring_days'
    },

    status: {
        type: DataTypes.BOOLEAN,
        field: 'status'
    },

    displayOnHomeStatus: {
        type: DataTypes.INTEGER,
        field: 'display_on_home_status'
    },

    days: {
        type : DataTypes.VIRTUAL,
        get(){
            const rawValue = `${this.startDate} to ${this.endDate}`;
            return rawValue;
        }
    }

},
    {
        freezeTableName: true,
        tableName: 'projects',
        paranoid: true,
        timestamp: true,
        createdAt : 'created_at',
        updatedAt : 'updated_at',
        deletedAt : 'deleted_at'
    });

    // projects.associate = function(models) {
    //     projects.hasMany(models.project_images, {foreignKey: 'user_id'})
    //     projects.belongsTo(models.ngo, {foreignKey: 'userId'})
    // }


    projects.afterFind(function(projects,options,cb){
        let newData = Array.isArray(projects)?[...projects]:{...projects};
        return new Promise((resolve,reject)=>{
            if(Array.isArray(newData)){
                for(let ele of newData){
                    Object.assign(ele.dataValues,{DaysLeft : null})
                }
            }else{
                if(newData.dataValues){
                    Object.assign(newData.dataValues,{DaysLeft : null});
                }
            }
            return resolve(newData,options);
        })
    })

    return projects
}

