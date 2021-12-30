var express = require('express');
var router = express.Router();


const {wrapper} = require('../utils/errorWrap')


const { addProjects,getAllProjects,getProjectById }= require('../controllers/projects') //Importing Vendor controller.
const { projectValidation, projectImageValidation } = require('../validations/projects');//importing users reciept validation from controller


// const validationError = require('../middleware/validationError')
// const {partnerValidation} = require('../validations/partner')
// const user = require('../utils/exportToCsv')


router.get('/get-project',wrapper(getAllProjects))
router.get('/get-project/:id',wrapper(getProjectById))
// router.get('/get-project-by-date',wrapper(getProjectById))
router.post('/create',projectValidation, projectImageValidation, wrapper(addProjects))
module.exports = router;