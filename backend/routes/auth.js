const express = require('express')
const router = express.Router()

const {userLogin, userRegister} = require('../controllers/authController')
const {wrapper} = require('../utils/errorWrap')


router.post('/',wrapper(userLogin))
router.post('/register',wrapper(userRegister))



module.exports = router;






module.exports = router;