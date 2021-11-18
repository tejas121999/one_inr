const multer = require('multer')

exports.ImageUpload = async (req, res, next) => {
    const fileFor = req.query.reason;
    let destination;
    if (fileFor == "vendor") {
        destination = `public/uploads/vendor/`
    }
    const storage = multer.diskStorage({
        filename: (req, file, cb) => {
            const exactName = file.originalname.split('.');
            const exactextension = exactName[exactName.length - 1];
            cb(null, `${Date.now()}.${exactextension}`);
        },
        destination: destination
    })
    const uploads = multer({ storage }).single('avatar');
    uploads(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: "Internal Server Error" })
        }

        let pathtoAdd = destination.replace('public/', '')
        req.file.path = pathtoAdd + req.file.filename;
        req.file.url = req.file.destination + req.file.filename;

        // For Login Users
        req.file.userId = 1;
        // let uploadFile = await models.fileUploads.create({
        //     originalname: req.file.originalname,
        //     encoding: req.file.encoding,
        //     mimetype: req.file.mimetype,
        //     filename: req.file.filename,
        //     userId: req.file.userId,
        //     path: req.file.path,
        //     url: req.file.url
        // });
        
        // if (!uploadFile) {
        //     return res.status(400).json({ message: "Error while uploading the file" })
        // }
        // else {
            return res.status(200).json({ message: "File Uploaded Successfully" })
       // }
    })
}