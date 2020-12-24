const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  name:{
    type: 'string',
    require: true
  },
  email:{ type: 'string' },
  password:{ type: 'string' }
})

module.exports = mongoose.model('User', userSchema)