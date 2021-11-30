var express = require('express');
var router = express.Router();

//importing modules

const { wrapper } = require('../utils/errorWrap');

const ngoController = require('../Controllers/ngo');//importing ngo controller

const validationError = require('../middleware/validationError'); //importing validatation error from middleware

const { ngoValidation } = require('../validations/ngo');//importing ngo validatation

const { addNgo, updateNgo, getAllNgo, deleteNgo } = require('../Controllers/ngo');//importing ngo controller operation from controller

//routing modules

router.post('/create-ngo', ngoValidation, validationError, wrapper(ngoController.addNgo))//creating ngo 

router.get('/read-ngo', wrapper(ngoController.addNgo))//listing ngo

router.put('/update-ngo/:id', ngoValidation, validationError, wrapper(ngoController.updateNgo))//update ngo

router.delete('/delete-ngo/:id', wrapper(ngoController.deleteNgo))//deleting ngo

module.exports= router;