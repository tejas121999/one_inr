const { body } = require("express-validator");
const moment = require('moment');

exports.addProjectValidation = [

    body('userId')
        .exists().withMessage('UserId is Required')
        .notEmpty().withMessage('UserId is Required')
        .isNumeric().withMessage('UserID must have a numeric value'),

    body('title')
        .exists().withMessage('Title is Required')
        .notEmpty().withMessage('Title is Required'),

    body('description')
        .exists().withMessage('Description is Required')
        .notEmpty().withMessage('Description is Required')
        .isLength({ min: 1, max: 200 }).withMessage('Max length of description is 200'),

    body('longDesc')
        .exists().withMessage('Long Description is Required')
        .notEmpty().withMessage('Long Description is Required'),

    body('videoLink')
        .exists().withMessage('Video Url is Required')
        .notEmpty().withMessage('Video Url is Required')
        .isURL()
        .withMessage('is invalid'),

    body('goal')
        .exists().withMessage('Goal is Required')
        .notEmpty().withMessage('Goal is Required')
        .isNumeric().withMessage('Goal must have a numeric value'),

    body('startDate')
        .exists().withMessage('Start Date is Required')
        .notEmpty().withMessage('Start Date is Required')
        // .isDate().withMessage('Invalid! Enter date in YY-MM-DD Format'),
        .custom(async (value, { req }) => {
            if (value > req.body.endDate) {
                return Promise.reject("Project endDate Cannot be greater than startDate")
            }
            startDate = moment(value).format('YYYY-MM-DD')
            if (startDate < moment().format('YYYY-MM-DD')) {
                return Promise.reject("Project cannot be created in past days")
            }
        })

    ,
    body('endDate')
        .exists().withMessage('EndDate is Required')
        .notEmpty().withMessage('EndDate is Required'),
    // .isDate().withMessage('Invalid! Enter date in YY-MM-DD Format'),

    body('isRecurring')
        .exists().withMessage('isRecurring is Required')
        .isBoolean().withMessage('Must be a boolean true or false')
        .custom(async (value, { req }) => {
            if (value === true) {
                if (!req.body.recurringDays || req.body.recurringDays === undefined || req.body.recurringDays.length === 0) {
                    return Promise.reject("Recurring Days is Required");
                }
                if (!Number.isInteger(req.body.recurringDays)) {
                    return Promise.reject("Recurring Days must have a numeric value");
                }
                let recuringCount = moment(req.body.endDate).diff(req.body.startDate, 'days')
                if (req.body.recurringDays > recuringCount) {
                    return Promise.reject("Recuring Days should be less than the total days of project")
                }

            }

        })



]



exports.projectImageValidation = [

    body('banner')
        .exists().withMessage('Banner Image is required')
        .notEmpty().withMessage('Banner Image is required'),

    body('cover')
        .exists().withMessage('Cover Image is required')
        .notEmpty().withMessage('Cover Image is required'),


    body('mobile')
        .exists().withMessage('Mobile Image is required')
        .notEmpty().withMessage('Mobile Image is required'),

    body('slider1')
        .exists().withMessage('slider1 Image is required')
        .notEmpty().withMessage('slider1 Image is required'),

    // body('slider2')
    //     .exists().withMessage('slider2 Image is required')
    //     .notEmpty().withMessage('slider2 Image is required'),

    // body('slider3')
    //     .exists().withMessage('slider3 Image is required')
    //     .notEmpty().withMessage('slider3 Image is required'),

    // body('slider4')
    //     .exists().withMessage('slider4 Image is required')
    //     .notEmpty().withMessage('slider4 Image is required'),

    // body('slider5')
    //     .exists().withMessage('slider5 Image is required')
    //     .notEmpty().withMessage('slider5 Image is required'),

    // body('slider6')
    //     .exists().withMessage('slider6 Image is required')
    //     .notEmpty().withMessage('slider6 Image is required'),




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

exports.updateProjectValidation = [
    body('title')
        .exists().withMessage('Title is Required')
        .notEmpty().withMessage('Title is Required'),

    body('description')
        .exists().withMessage('Description is Required')
        .notEmpty().withMessage('Description is Required')
        .isLength({ min: 1, max: 200 }).withMessage('Max length of description is 200'),

    body('longDesc')
        .exists().withMessage('Long Description is Required')
        .notEmpty().withMessage('Long Description is Required'),

    body('goal')
        .exists().withMessage('Goal is Required')
        .notEmpty().withMessage('Goal is Required')
        .isNumeric().withMessage('Goal must have a numeric value'),
    body('endDate')
        .exists().withMessage('EndDate is Required')
        .notEmpty().withMessage('EndDate is Required'),
    body('commission')
        .exists().withMessage('Commission is Required')
        .notEmpty().withMessage('Commission is Required')
        .isNumeric().withMessage('Commission must have a numeric value'),
    body('recurringDays')
        .exists().withMessage('Recurring days is Required')
        .notEmpty().withMessage('Recurring days is Required')
        .isNumeric().withMessage('Recurring days must have a numeric value')

]