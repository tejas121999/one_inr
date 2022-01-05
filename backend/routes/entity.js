const express = require('express');
const router = express.Router()
const {createEntity} = require('../controllers/entity')



router.post('/',createEntity)


module.exports = router;