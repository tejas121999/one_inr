var express = require('express');
var router = express.Router();

const {wrapper} = require('../utils/errorWrap')

const {addusersReceipts, updateusersReceipts} = require('../Controllers/usersReceipts/usersReceipts')
//Importing usersReceipts controller.

const validationError = require('../middleware/validationError');

