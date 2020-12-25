const express = require('express')
const router = express.Router()
const User = require('../../models/user')


router.get('/login', (req, res) => {
  res.render('index')
})

router.post('/login', (req, res) => {
  
})

router.get('/register', (req, res) => {
  res.render('register')
})

module.exports = router