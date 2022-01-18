var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {myProfile,updateProfile,updateProfilePassword,createUser,getAllUser,updateUser,deleteUser, getUserByID,} = require('../controllers/myProfile')
const { updateProfileValidation,updateProfilePasswordValidation} = require('../validations/user')
const {wrapper} = require('../utils/errorWrap');
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')

router.get('/',checkAuth,checkRolesAndPermission,wrapper(getAllUser));
router.get('/my-profile',checkAuth,checkRolesAndPermission,wrapper(myProfile));
router.get('/:id',checkAuth,checkRolesAndPermission,wrapper(getUserByID));
router.put('/update',checkAuth,checkRolesAndPermission,updateProfileValidation,wrapper(updateProfile));
router.put('/update/password',checkAuth,checkRolesAndPermission,updateProfilePasswordValidation,wrapper(updateProfilePassword));
router.post('/',checkAuth,checkRolesAndPermission,wrapper(createUser));
router.put('/:id',checkAuth,checkRolesAndPermission,wrapper(updateUser));
router.delete('/:id',checkAuth,checkRolesAndPermission,wrapper(deleteUser));

module.exports = router;
