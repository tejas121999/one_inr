module.exports = (sequeilze,Datatypes) =>{
    const projectInterval = sequeilze.define('projectInterval',{
        projectId : {
            type : Datatypes.INTEGER,
            field : 'project_id'
        },
        start_date : {
            type : Datatypes.DATE,
            field : 'start_date'
        },
        end_date : {
            type : Datatypes.DATE,
            field : 'end_date'
        },
        funded : {
            type : Datatypes.BIGINT,
            field : 'funded'
        },
        completed : { 
            type : Datatypes.FLOAT,
            field : 'completed'
        },
        fundStatus : {
            type : Datatypes.INTEGER,
            field : 'fund_status'

        },
        isArchive : {
            type : Datatypes.INTEGER,
            field : 'is_archive'
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