var express = require('express');
var router = express.Router();
const { createRole ,createRoleswithPermission} = require('../controllers/rolesAndPermission')
const  {wrapper} = require('../utils/errorWrap')

router.post('/',wrapper(createRole))
router.post('/add-permission',wrapper(createRoleswithPermission))




module.exports = router;