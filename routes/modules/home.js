const express = require('express')
const router = express.Router()
const User = require('../../models/user')


router.get('/', (req, res) => {
  User.find()
    .lean()
    .then(users => res.render('index', { users }))
    .catch(error => console.error(error))
})

module.exports = router