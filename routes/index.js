const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const user = require('./modules/users')
// const { authenticate } = require('../middleware/auth')


router.use('/users', user)
router.use('/', home)

module.exports = router