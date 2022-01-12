var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const { createRole ,createRoleswithPermission,getRoles} = require('../controllers/rolesAndPermission')
const  {wrapper} = require('../utils/errorWrap')

router.post('/',checkAuth,wrapper(createRole))
router.post('/add-permission',checkAuth,wrapper(createRoleswithPermission))
router.get('/',checkAuth,wrapper(getRoles))



module.exports = router;