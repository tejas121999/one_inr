module.exports = (sequelize,DataTypes)=>{
    const configs = sequelize.define('configs',{
        name:{
            type: DataTypes.STRING,
            field : 'name',
            allowNull : false
        },
        value:{
            type: DataTypes.INTEGER,
            field : 'value',
            allowNull : false
        },
        createdAt : {
            type: DataTypes.DATE,
            field : 'created_at'
        },
        updatedAt : {
            type: DataTypes.DATE,
            field : 'updated_at'
        }
    },    {
        freezeTableName: true,
        tableName: 'configs'
    })
    return configs
}