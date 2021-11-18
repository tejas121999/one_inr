const express = require('express')
const router = express.Router()
const {ImageUpload} = require('../controllers/fileUploadController/fileUpload')


router.post("/",ImageUpload);



module.exports = router;