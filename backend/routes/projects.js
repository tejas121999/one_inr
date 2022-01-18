var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const {wrapper} = require('../utils/errorWrap')


const { addProjects,getAllProjects,getProjectById,updateStatus,setHomeProject,getCompletedProject,addFunds }= require('../controllers/projects') //Importing Vendor controller.
const { projectValidation, projectImageValidation } = require('../validations/projects');//importing users reciept validation from controller
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')

// const validationError = require('../middleware/validationError')
// const {partnerValidation} = require('../validations/partner')
// const user = require('../utils/exportToCsv')


router.get('/get-project',checkAuth,checkRolesAndPermission,wrapper(getAllProjects))
router.get('/get-project/:id',checkAuth,checkRolesAndPermission,wrapper(getProjectById))
router.get('/get-completed-projects',checkAuth,checkRolesAndPermission,wrapper(getCompletedProject))
// router.get('/get-project-by-date',wrapper(getProjectById))
router.post('/create',checkAuth,checkRolesAndPermission,projectValidation, projectImageValidation, wrapper(addProjects))
router.put('/update-status/:id',checkAuth,checkRolesAndPermission,wrapper(updateStatus))
router.put('/set-homeProject/:id',checkAuth,checkRolesAndPermission,wrapper(setHomeProject))
router.post('/add-funds/:id',checkAuth,checkRolesAndPermission,wrapper(addFunds))
module.exports = router;