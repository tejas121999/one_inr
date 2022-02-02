module.exports = (sequelize, DataTypes) => {
    const projects = sequelize.define('projects', {

        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            allowNull : false
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
            type: DataTypes.TEXT,
            field: 'description',
            allowNull: false
        },

        longDesc: {
            type: DataTypes.TEXT,
            field: 'long_description',
            allowNull : false
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
            filed: 'funded',
            defaultValue : 0
        },

        startDate: {
            type: DataTypes.DATEONLY,
            field: 'start_date',
            allowNull : false
        },

        endDate: {
            type: DataTypes.DATEONLY,
            field: 'end_date',
            allowNull : false
        },
        isRecurring: {
            type: DataTypes.BOOLEAN,
            field: 'is_recurring',
            allowNull : false
        },
        recurringDays: {
            type: DataTypes.INTEGER,
            field: 'recurring_days'
        },

        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            allowNull : false
        },

        displayOnHomeStatus: {
            type: DataTypes.BOOLEAN,
            field: 'display_on_home_status',
            defaultValue: false
        },

        date: {
            type: DataTypes.VIRTUAL,
            get() {
                const rawValue = `${this.startDate} to ${this.endDate}`;
                return rawValue;
            }
        },

        recurring: {
            type: DataTypes.VIRTUAL,
            get() {
                const isRecurring = this.recurringDays;
                if (isRecurring == 0) {
                    return "No"
                } else {
                    return 'Yes'
                }
            }
        }

    },
        {
            freezeTableName: true,
            tableName: 'projects',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            paranoid: true,
            deletedAt: 'deleted_at',
            timestamp: true,

        });

    projects.associate = function (models) {
        projects.hasMany(models.project_image, { foreignKey: 'projectId' })
        projects.belongsTo(models.ngo, { foreignKey: 'userId' })
        projects.hasMany(models.projectInterval,{foreignKey : 'projectId'})
    }


    projects.afterFind(function (projects, options, cb) {
        let newData = Array.isArray(projects) ? [...projects] : { ...projects };
        return new Promise((resolve, reject) => {
            if (Array.isArray(newData)) {
                for (let ele of newData) {
                    Object.assign(ele.dataValues, { DaysLeft: null })
                }
            } else {
                if (newData.dataValues) {
                    Object.assign(newData.dataValues, { DaysLeft: null });
                }
            }
            return resolve(newData, options);
        })
    })

    return projects
}

