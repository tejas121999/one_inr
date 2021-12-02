const express = require('express')
const router = express.Router()
const {csvUpload} = require('../controllers/csvUpload')
const user = require('../utils/exportToCsv')

router.post("/csv-upload",csvUpload);
router.get('/get-users',user.exportsToCsv)





module.exports = router;