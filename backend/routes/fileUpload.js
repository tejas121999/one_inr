const express = require('express')
const router = express.Router()
const {ImageUpload} = require('../controllers/fileUpload')


router.post("/",ImageUpload);



module.exports = router;