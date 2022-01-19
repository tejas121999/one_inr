const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const {csvUpload} = require('../controllers/csvUpload')
const user = require('../utils/exportToCsv')

router.post("/csv-upload",checkAuth,csvUpload);
router.get('/get-users',checkAuth,user.exportsToCsv)





module.exports = router;
