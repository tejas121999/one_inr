const express = require('express');
const router = express.Router()
const {userRegister} = require('../controllers/auth/authController')
const {getAllDonor,getAllParentDetails} =require('../controllers/donors/donors')
const {wrapper} = require('../utils/errorWrap')
const validationError =require('../middleware/validationError')
const {donorValidation} =require('../validations/donors')




router.post('/',donorValidation,validationError,wrapper(userRegister))
router.get("/",wrapper(getAllDonor))
router.get('/parents',wrapper(getAllParentDetails))


module.exports = router