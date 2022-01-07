var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const {wrapper} = require('../utils/errorWrap')


const { addProjects,getAllProjects,getProjectById,updateStatus,setHomeProject,getCompletedProject,addFunds }= require('../controllers/projects') //Importing Vendor controller.
const { projectValidation, projectImageValidation } = require('../validations/projects');//importing users reciept validation from controller


// const validationError = require('../middleware/validationError')
// const {partnerValidation} = require('../validations/partner')
// const user = require('../utils/exportToCsv')


router.get('/get-project',wrapper(getAllProjects))
router.get('/get-project/:id',wrapper(getProjectById))
router.get('/get-completed-projects',wrapper(getCompletedProject))
// router.get('/get-project-by-date',wrapper(getProjectById))
router.post('/create',projectValidation, projectImageValidation, wrapper(addProjects))
router.put('/update-status/:id',wrapper(updateStatus))
router.put('/set-homeProject/:id',wrapper(setHomeProject))
router.post('/add-funds/:id',wrapper(addFunds))
module.exports = router;