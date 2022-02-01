var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
//importing modules

const { wrapper } = require('../utils/errorWrap');

// const ngoController = require('../controllers/ngo');//importing ngo controller

const validationError = require('../middleware/validationError'); //importing validatation error from middleware

const { ngoValidation, ngoUpdateValidation } = require('../validations/ngo');//importing ngo validatation

const { addNgo, updateNgo, getAllNgo, deleteNgo, getNgoById } = require('../controllers/ngo');//importing ngo controller operation from controller

//routing modules
router.post('/', checkAuth, ngoValidation, validationError, wrapper(addNgo))//creating ngo 

router.get('/', checkAuth, wrapper(getAllNgo))//listing ngo

router.get('/:id', checkAuth, wrapper(getNgoById)) //Getting Ngo Details with Bank Id

router.put('/:id', checkAuth, ngoUpdateValidation, validationError, wrapper(updateNgo))//update ngo

router.delete('/:id', checkAuth, wrapper(deleteNgo))//deleting ngo

module.exports = router;
