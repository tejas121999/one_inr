const express = require('express')
const router = express.Router()

const {userLogin} = require('../controllers/auth/authController')



router.post('/',userLogin)



module.exports = router;






module.exports = router;