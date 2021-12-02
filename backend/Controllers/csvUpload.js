const multer = require('multer')
//const BulkUpload = require('../../models/bulkUpload')
const models = require('../models');
const baseURL = "http://localhost:3000/"
 


exports.csvUpload = async (req, res, next) => {
        console.log('dasdfsdfa')
        let destination;
        const storage = multer.diskStorage({
            filename: (req, file, cb) => {
                const extArray = file.originalname.split(".");
                const extension = extArray[extArray.length - 1];
                cb(null, `${Date.now()}.${extension}`);
            },
            destination: "public/uploads/bulkUpload/"
        });

        const uploads = multer({storage}).single("avatar");
        uploads(req, res, async err => {
            if (err) {
                res.status(500);
            }
            req.file.userId = 1;
            req.file.type = "appRequests";
            req.file.url = req.file.destination + req.file.filename;
            console.log(req.file);
            let uploadFile = await models.csvUpload.create(req.file);
            if (!uploadFile) {
                res.status(400).json({
                    message: "Error while uploading file!"
                });
            } else {
                res.status(200).json({
                    uploadFile
                });
            }
        });
    
};

