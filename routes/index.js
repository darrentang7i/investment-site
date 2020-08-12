const express = require('express')
var router = express.Router()

// controller modules
const indexController = require('../controllers/indexController.js')

// GET reqest to the home page
router.get('/', indexController.home)

module.exports = router