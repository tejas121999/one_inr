module.exports = (sequelize, DataTypes) => {
    const CsvUpload = sequelize.define('csvUpload', {
        // attributes
        filename: {
            type: DataTypes.TEXT,
            field:'file_name'
        },
        mimetype: {
            type: DataTypes.TEXT,
            field:'mimetype'

        },
        encoding: {
            type: DataTypes.TEXT,
            field:'encoding'

        },
        originalname: {
            type: DataTypes.TEXT,
            field:'original_name'

        },
        url:{
            type: DataTypes.TEXT,
            field:'url'

        },
        type:{
            type:DataTypes.TEXT,
            field:'type'

        },
        userId:{
            type:DataTypes.INTEGER,
            field:'user_id'
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "loading",
            field:'status'
        }
    }, {
            freezeTableName: true,
            tableName: 'csv_upload',
            // schema: 'gold_emi',
        });

        //CsvUpload.associate = function (models) {
        //CsvUpload.belongsTo(models.user, { foreignKey: 'userId', as: 'users' });
    

    // This will return required JSON.

    CsvUpload.prototype.toJSON = function () {
        var values = Object.assign({}, this.get());
        if(process.env.FILE_TO_AWS == 'true'){
            values.URL = process.env.BASE_URL + values.url;
        }else{
            values.URL = process.env.BASE_URL + values.url;
            let filePath = values.url;
            let pathToadd = filePath.replace('public/','');
            values.URL = process.env.BASE_URL + pathToadd;
        }
        delete values.encoding;
        return values;
    }

    return CsvUpload;
}