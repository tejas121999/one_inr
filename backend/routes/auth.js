const express = require('express')
const router = express.Router()

const {userLogin, userRegister} = require('../controllers/authController')
const {wrapper} = require('../utils/errorWrap')
const validationError =require('../middleware/validationError')
const {loginValidation} = require('../validations/auth')


router.post('/',loginValidation,validationError,wrapper(userLogin))
router.post('/register',wrapper(userRegister))



module.exports = router;






module.exports = router;