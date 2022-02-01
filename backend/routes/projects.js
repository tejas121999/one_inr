var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {wrapper} = require('../utils/errorWrap')
const { addProjects,getAllProjects,getProjectById,updateStatus,setHomeProject,getCompletedProject,addFunds,setRecuringProject }= require('../controllers/projects') //Importing Vendor controller.
const { addProjectValidation, projectImageValidation } = require('../validations/projects');//importing users reciept validation from controller
const validationError = require('../middleware/validationError')
// const {partnerValidation} = require('../validations/partner')
// const user = require('../utils/exportToCsv')

router.get('/check-isrecuring',wrapper(setRecuringProject))
router.get('/',checkAuth,wrapper(getAllProjects))
router.get('/:id',checkAuth,wrapper(getProjectById))
router.get('/completed',checkAuth,wrapper(getCompletedProject))
// router.get('/get-project-by-date',wrapper(getProjectById))
router.post('/',addProjectValidation, projectImageValidation,validationError,checkAuth, wrapper(addProjects))
router.put('/update-status/:id',checkAuth,wrapper(updateStatus))
router.put('/set-home-project/:id',checkAuth,wrapper(setHomeProject))
router.post('/add-funds/:id',checkAuth,wrapper(addFunds))



module.exports = router;