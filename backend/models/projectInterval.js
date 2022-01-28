module.exports = (sequeilze,Datatypes) =>{
    const projectInterval = sequeilze.define('projectInterval',{
        projectId : {
            type : Datatypes.INTEGER,
            field : 'project_id'
        },
        startDate : {
            type : Datatypes.DATEONLY,
            field : 'start_date'
        },
        endDate : {
            type : Datatypes.DATEONLY,
            field : 'end_date'
        },
        funded : {
            type : Datatypes.BIGINT,
            field : 'funded',
            defaultValue : 0
        },
        completed : { 
            type : Datatypes.FLOAT,
            field : 'completed'
        },
        fundStatus : {
            type : Datatypes.BOOLEAN,
            field : 'fund_status',
            defaultValue : false
        },
        isArchive : {
            type : Datatypes.BOOLEAN,
            field : 'is_archive',
            defaultValue : false
        },
        isActive : {
            type : Datatypes.BOOLEAN,
            field : 'is_active',
            defaultValue : true
        }
    },{
            freezeTableName : true,
            tableName: 'project_interval',
            paranoid : true,
            deletedAt : 'deleted_at',
            createdAt : 'created_at',
            updatedAt : 'updated_at'
    
         
        })
        return projectInterval;
    }