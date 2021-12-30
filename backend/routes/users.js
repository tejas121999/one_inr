var express = require('express');
var router = express.Router();

const {myProfile,updateProfile,updateProfilePassword} = require('../controllers/myProfile')
const { updateProfileValidation,updateProfilePasswordValidation} = require('../validations/user')

router.get('/my-profile',myProfile)
router.put('/update',updateProfileValidation,updateProfile)
router.put('/update/password',updateProfilePasswordValidation,updateProfilePassword)


module.exports = router;
