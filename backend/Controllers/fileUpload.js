const multer = require('multer')

const baseURL = process.env.BASE_URL

exports.ImageUpload = async (req, res) => {
    let fileFor = req.query.reason;

    //vendor file uploads path location
    let destination;
    if (fileFor == "vendor_pan") {
        destination = `public/uploads/vendor/pan_image/`
    }
    else if (fileFor = "vendor_gst") {
        destination = `public/uploads/vendor/gst_image/`
    }


    //Ngo file Uploads path location
    else if (fileFor == "pancard") {
        destination = 'public/ngo/pancard/pancard_image/'

    } else if (fileFor == "certificate") {
        destination = 'public/ngo/certificate/certificate_image/'

    } else if (fileFor == "charityRegistrationCertificate") {
        destination = 'public/ngo/charityRegistrationCertificate/charityRegistrationCertificate_image/'

    } else if (fileFor == "dead") {
        destination = 'public/ngo/dead/dead_image/'

    } else if (fileFor == "logo" ) {
        destination = 'public/ngo/logo/logo_image/'

    } else if (fileFor == " ") {

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
        // filename: req.file.filename,
        //     userId: req.file.userId,
        // path: req.file.path,
        //     url: req.file.url
        // });

        // if (!uploadFile) {
        //     return res.status(400).json({ message: "Error while uploading the file" })
        // }
        // else {

        return res.status(201).json({

            url: req.file.url,
            path: baseURL+req.file.path,
            filename: req.file.filename,
            message: "File Uploaded Successfully"
        })
        
        // }
    })
}

