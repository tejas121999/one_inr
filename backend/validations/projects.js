const { body } = require("express-validator");


exports.projectValidation = [

    body('title')
        .exists().withMessage('Title is Required')
        .notEmpty().withMessage('Title is Required'),

    body('description')
        .exists().withMessage('description is Required')
        .notEmpty().withMessage('description is Required'),

    body('goal')
        .exists().withMessage('goal is Required')
        .notEmpty().withMessage('goal is Required')
        .isNumeric().withMessage('Only Number required'),
        
    body('commission')
        .exists().withMessage('commission is Required')
        .notEmpty().withMessage('commission is Required')
        .isNumeric().withMessage('Only Number required')
]



exports.projectImageValidation = [

    body('projectImage')
        .exists().withMessage('Project Image Name is required')
        .notEmpty().withMessage('Project Image Name is required'),

    // body('imageType')
    //     .notEmpty().withMessage('Image is required')
    //     .isImage(function(value, filename) {

    //         var extension = (path.extname(filename)).toLowerCase();
    //         switch (extension) {
    //             case '.jpg':
    //                 return '.jpg';
    //             case '.jpeg':
    //                 return '.jpeg';
    //             case  '.png':
    //                 return '.png';
    //             default:
    //                 return false;
    //         }
    //     })

]