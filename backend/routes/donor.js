const express = require('express');
const router = express.Router()
const {userRegister} = require('../controllers/auth/authController')
const {getAllDonor,getAllParentDetails,getDonorById,updateDonor,updateDonorBalance,deleteDonor} =require('../controllers/donors/donors')
const {wrapper} = require('../utils/errorWrap')
const validationError =require('../middleware/validationError')
const {donorValidation,updateDonorValidation,updateDonorBalanceValidation} =require('../validations/donors')




router.post('/',donorValidation,validationError,wrapper(userRegister))
router.get('/',wrapper(getAllDonor))
router.get('/parents',wrapper(getAllParentDetails))
router.get('/:id',wrapper(getDonorById))
router.put('/:id',updateDonorValidation,validationError,wrapper(updateDonor))
router.put('/balance/:id',updateDonorBalanceValidation,validationError,wrapper(updateDonorBalance))
router.delete('/:id',wrapper(deleteDonor))


module.exports = router