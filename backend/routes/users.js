var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {myProfile,updateProfile,updateProfilePassword,createUser,getAllUser} = require('../controllers/myProfile')
const { updateProfileValidation,updateProfilePasswordValidation} = require('../validations/user')
const {wrapper} = require('../utils/errorWrap');

router.get('/',checkAuth,wrapper(getAllUser))
router.get('/my-profile',checkAuth,wrapper(myProfile))
router.put('/update',checkAuth,updateProfileValidation,wrapper(updateProfile))
router.put('/update/password',checkAuth,updateProfilePasswordValidation,wrapper(updateProfilePassword))
router.post('/',checkAuth,wrapper(createUser))

module.exports = router;
