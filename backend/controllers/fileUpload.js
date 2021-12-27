const multer = require("multer");

exports.ImageUpload = async (req, res) => {
  let fileFor = req.query.reason;

  //an object specifying the size limit of the following optional properties, now we have created a object where i have storage
  // and limit of te file size. In case coming file size is greater then defined size
  // multer will throw an error.
  // var obj = {
  //     storage: storage,
  //     limits: {
  //         fileSize: 200 * 1024 * 1024
  //     },
  //     fileFilter: fileFilter
  // };

  //vendor file uploads path location
  let destination;
  if (fileFor == "vendor_pan") {
    destination = `public/uploads/vendor/pan_image/`;
  } else if (fileFor == "vendor_gst") {
    destination = `public/uploads/vendor/gst_image/`;
  } else if (fileFor == "partner_gst") {
    destination = `public/uploads/partner/gst_image/`;
  } else if (fileFor == "partner_pan") {
    destination = `public/uploads/partner/pan_image/`;
  }

  //Ngo file Uploads path location
  else if (fileFor == "ngo_pancard") {
    destination = `public/uploads/ngo/pancard/`;
  } else if (fileFor == "ngo_certificate") {
    destination = `public/uploads/ngo/certificate/`;
  } else if (fileFor == "ngo_charity_registration_certificate") {
    destination = `public/uploads/ngo/charityRegistrationCertificate/`;
  } else if (fileFor == "ngo_deed") {
    destination = `public/uploads/ngo/deed/`;
  } else if (fileFor == "ngo_logo") {
    destination = `public/uploads/ngo/logo/`;
  }

  // Project Images Upload
  else if (fileFor == "banner") {
    destination = `public/uploads/project_image/banner/`;
  } else if (fileFor == "cover") {
    destination = `public/uploads/project_image/cover/`;
  } else if (fileFor == "mobile") {
    destination = `public/uploads/project_image/mobile/`;
  } else if (fileFor == "slider") {
    destination = `public/uploads/project_image/slider/`;
  }

  // The next thing will be to define a storage location for our files. Multer gives the option of storing files to disk, as shown below.
  //  Here, we set up a directory where all our files will be saved, and we’ll also give the files a new identifier.
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      const exactName = file.originalname.split(".");
      const exactextension = exactName[exactName.length - 1];

      cb(null, `${Date.now()}.${exactextension}`);
    },
    destination: destination,
  });

  //set this to a function to control which files should be uploaded and which should be skipped
  let fileFilter = function (req, file, cb) {
    var allowedMimes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        {
          success: false,
          message: "Invalid file type. only jpg, png image files are allowed.",
        },
        false
      );
    }
  };

  var obj = {
    storage,
    limits: {
      fileSize: 2 * 1024 * 1024, //2MB
    },
  };

  //now we have to add our created object 'obj' into multer and called method single with param 'file'. here file is param of request body.
  const uploads = multer(obj).single("avatar");

  // When encountering an error, Multer will delegate the error to Express.
  // You can display a nice error page using the standard express way.
  uploads(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    let pathtoAdd = destination.replace("public/", "");
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
      type: fileFor,
      url: req.file.url,
      path: process.env.BASE_URL + req.file.path,
      pathtoUpload: req.file.path,
      filename: req.file.filename,
      message: "File Uploaded Successfully",
    });

    // }
  });
};
