const express = require('express')
const router = express.Router()
const {ImageUpload} = require('../controllers/fileUpload')
const checkAuth = require('../middleware/checkAuth')

router.post("/",checkAuth,ImageUpload);



module.exports = router;