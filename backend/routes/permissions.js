var express = require('express');
var router = express.Router();
const {createPermission} = require('../controllers/permissions')
const {wrapper} = require('../utils/errorWrap')
const {createPermissionSystemInfo} = require('../controllers/permissionSystemInfo')

router.post('/',wrapper(createPermission))
router.post('/new-permission-sysmtem-info',wrapper(createPermissionSystemInfo))


module.exports = router;
