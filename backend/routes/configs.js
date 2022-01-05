var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/checkAuth')


const {wrapper} = require('../utils/errorWrap')


const {addConfigSetting,getConfigSetting,updateConfigSetting}= require('../controllers/config') //Importing Vendor controller.




router.post('/',checkAuth,wrapper(addConfigSetting))

router.get('/',checkAuth,wrapper(getConfigSetting))

router.put('/:id',checkAuth,wrapper(updateConfigSetting))





module.exports = router;
