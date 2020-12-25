const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes') // 路由
require('./config/mongoose') // database


const app = express()
const post = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes) // 路由

app.listen(post, () => {
  console.log(`Express is running on http://localhost:${post}/users/login`)
})