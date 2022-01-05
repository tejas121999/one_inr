var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const {wrapper} = require('../utils/errorWrap')


const { addProjects,getAllProjects,getProjectById,updateStatus,setHomeProject }= require('../controllers/projects') //Importing Vendor controller.
const { projectValidation, projectImageValidation } = require('../validations/projects');//importing users reciept validation from controller


// const validationError = require('../middleware/validationError')
// const {partnerValidation} = require('../validations/partner')
// const user = require('../utils/exportToCsv')


router.get('/get-project',checkAuth,wrapper(getAllProjects))
router.get('/get-project/:id',checkAuth,wrapper(getProjectById))
// router.get('/get-project-by-date',wrapper(getProjectById))
router.post('/create',checkAuth,projectValidation, projectImageValidation, wrapper(addProjects))
router.put('/update-status/:id',checkAuth,wrapper(updateStatus))
router.put('/set-homeProject/:id',checkAuth,wrapper(setHomeProject))
module.exports = router;