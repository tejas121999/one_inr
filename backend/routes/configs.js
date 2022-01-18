var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')


const {wrapper} = require('../utils/errorWrap')


const {addConfigSetting,getConfigSetting,updateConfigSetting}= require('../controllers/config') //Importing Vendor controller.

const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')


router.post('/',checkAuth,checkRolesAndPermission,wrapper(addConfigSetting))

router.get('/',checkAuth,checkRolesAndPermission,wrapper(getConfigSetting))

router.put('/:id',checkAuth,checkRolesAndPermission,wrapper(updateConfigSetting))





module.exports = router;
