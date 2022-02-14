var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {wrapper} = require('../utils/errorWrap')
const { addProjects,getAllProjects,getProjectById,updateProject,archiveProject,getArchivedProjects,unArchiveProject,updateStatus,setHomeProject,getCompletedProjects,addFunds,setRecuringProject, updateProjectImages, updateProjectInformation, getHomeProjectInfo }= require('../controllers/projects') //Importing Vendor controller.
const { addProjectValidation, projectImageValidation,updateProjectValidation } = require('../validations/projects');//importing users reciept validation from controller
const validationError = require('../middleware/validationError')
// const {partnerValidation} = require('../validations/partner')
// const user = require('../utils/exportToCsv')

router.get('/check-isrecuring',wrapper(setRecuringProject))

router.get('/',checkAuth,wrapper(getAllProjects))

router.get('/get-home-project/:id', checkAuth , wrapper(getHomeProjectInfo));

router.get('/completed',checkAuth,wrapper(getCompletedProjects))

router.get('/getarchived',checkAuth,wrapper(getArchivedProjects))

router.get('/',checkAuth,wrapper(getAllProjects))
// router.get('/get-project-by-date',wrapper(getProjectById))

router.post('/',checkAuth, addProjectValidation, projectImageValidation,validationError, wrapper(addProjects))

router.put('/update-status/:id',checkAuth,wrapper(updateStatus))

router.put('/set-home-project/:id',checkAuth,wrapper(setHomeProject))

router.post('/add-funds/:id',checkAuth,wrapper(addFunds))

router.get('/:id',checkAuth,wrapper(getProjectById))

router.put('/update/:id',checkAuth,updateProjectValidation,validationError,wrapper(updateProject))
router.put('/archive/:id',wrapper(archiveProject))
router.put('/unarchive/:id',wrapper(unArchiveProject))
router.put('/update-images/:id', checkAuth, wrapper(updateProjectImages)); //update project images

router.put('/update-project/:id', checkAuth , wrapper(updateProjectInformation)); //update project

module.exports = router;