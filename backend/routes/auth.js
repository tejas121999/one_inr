const express = require('express')
const router = express.Router()

const {userLogin, userRegister} = require('../controllers/authController')
const {wrapper} = require('../utils/errorWrap')
const validationError = require('../middleware/validationError')
const {loginValidation,userRegisterValidation} = require('../validations/auth')
const {forgotPassword,validateOtp,changePassword,logout} = require('../controllers/authController')
const checkAuth  = require('../middleware/checkAuth')


router.post('/',loginValidation,validationError,wrapper(userLogin))
router.post('/register',userRegisterValidation,wrapper(userRegister))
router.post('/forgot/send-email-otp',wrapper(forgotPassword))
router.post('/forgot/validate-email-otp',wrapper(validateOtp))
router.post('/forgot/change-password',wrapper(changePassword))
router.get('/logout',checkAuth,wrapper(logout))

module.exports = router;






module.exports = router;
