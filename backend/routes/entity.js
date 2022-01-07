const express = require('express');
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const {createEntity} = require('../controllers/entity')



router.post('/',checkAuth,createEntity)


module.exports = router;