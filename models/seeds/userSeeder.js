const User = require('../user')
const db = require('../../config/mongoose')

const users = [
  {
    name: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    name: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    name: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    name: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    name: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

db.once('open', () => {
  console.log('mongodb conneted')
  for(let i = 0; i < users.length ; i++){
    User.create(users[i])
  }
  console.log('done')
})
