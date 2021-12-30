var express = require('express');
var router = express.Router();


const {wrapper} = require('../utils/errorWrap')


const {addConfigSetting,getConfigSetting,updateConfigSetting}= require('../controllers/config') //Importing Vendor controller.




router.post('/',wrapper(addConfigSetting))

router.get('/',wrapper(getConfigSetting))

router.put('/:id',wrapper(updateConfigSetting))





module.exports = router;
