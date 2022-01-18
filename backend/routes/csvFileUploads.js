const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const {csvUpload} = require('../controllers/csvUpload')
const user = require('../utils/exportToCsv')
const checkRolesAndPermission = require('../middleware/checkRolesAndPermissions')

router.post("/csv-upload",checkAuth,checkRolesAndPermission,csvUpload);
router.get('/get-users',checkAuth,checkRolesAndPermission,user.exportsToCsv)





module.exports = router;