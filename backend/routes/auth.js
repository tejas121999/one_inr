const express = require('express')
const router = express.Router()

const {userLogin, userRegister} = require('../controllers/auth/authController')



router.post('/',userLogin)
router.post('/register',userRegister)



module.exports = router;






module.exports = router;