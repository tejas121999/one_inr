var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const { createRole ,createRoleswithPermission,getRoles} = require('../controllers/rolesAndPermission')
const  {wrapper} = require('../utils/errorWrap')
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')

router.post('/',checkAuth,checkRolesAndPermission,wrapper(createRole))
router.post('/add-permission',checkAuth,checkRolesAndPermission,wrapper(createRoleswithPermission))
router.get('/',checkAuth,checkRolesAndPermission,wrapper(getRoles))



module.exports = router;