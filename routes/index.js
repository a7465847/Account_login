const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const user = require('./modules/users')

router.use('/', home)
router.use('/users', user)

module.exports = router