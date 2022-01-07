var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {myProfile,updateProfile,updateProfilePassword} = require('../controllers/myProfile')
const { updateProfileValidation,updateProfilePasswordValidation} = require('../validations/user')

router.get('/my-profile',checkAuth,myProfile)
router.put('/update',checkAuth,updateProfileValidation,updateProfile)
router.put('/update/password',checkAuth,updateProfilePasswordValidation,updateProfilePassword)


module.exports = router;
