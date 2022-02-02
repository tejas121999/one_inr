const express = require('express');
const router = express.Router();
const {donate} = require('../controllers/donate');
const checkAuth = require('../middleware/checkAuth');
const {wrapper} = require('../utils/errorWrap');

router.post("/:id",checkAuth,wrapper(donate));







module.exports = router;
