var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')
const {wrapper} = require('../utils/errorWrap')
const {addConfigSetting,getConfigSetting,configSetting,updateConfig}= require('../controllers/config') //Importing Vendor controller.




router.post('/',checkAuth,wrapper(addConfigSetting))

router.get('/',checkAuth,wrapper(getConfigSetting))

router.put('/update',checkAuth,wrapper(updateConfig))

// router.put('/:id',checkAuth,wrapper(configSetting))




module.exports = router;
