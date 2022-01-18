var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
//importing modules

const { wrapper } = require('../utils/errorWrap');

// const ngoController = require('../controllers/ngo');//importing ngo controller

const validationError = require('../middleware/validationError'); //importing validatation error from middleware

const { ngoValidation } = require('../validations/ngo');//importing ngo validatation

const { addNgo, updateNgo, getAllNgo, deleteNgo, getNgoById } = require('../controllers/ngo');//importing ngo controller operation from controller
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')


//routing modules
router.post('/', checkAuth,checkRolesAndPermission, ngoValidation, validationError, wrapper(addNgo))//creating ngo 

router.get('/', checkAuth,checkRolesAndPermission, wrapper(getAllNgo))//listing ngo

router.get('/:id', checkAuth,checkRolesAndPermission, wrapper(getNgoById)) //Getting Ngo Details with Bank Id

router.put('/:id', checkAuth,checkRolesAndPermission, wrapper(updateNgo))//update ngo

router.delete('/:id', checkAuth,checkRolesAndPermission, wrapper(deleteNgo))//deleting ngo

module.exports = router;