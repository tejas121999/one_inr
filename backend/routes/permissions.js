var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {createPermission} = require('../controllers/permissions')
const {wrapper} = require('../utils/errorWrap')
const {createPermissionSystemInfo} = require('../controllers/permissionSystemInfo')

router.post('/',checkAuth,wrapper(createPermission))
router.post('/new-permission-sysmtem-info',checkAuth,wrapper(createPermissionSystemInfo))


module.exports = router;
