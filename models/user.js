const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  name:{
    type: 'string',
    require: true
  },
  email:{
    type: 'string',
    require: true
  },
  password:{
    type: 'string',
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)