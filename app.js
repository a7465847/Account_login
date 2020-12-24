const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')


const app = express()
const post = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.send('This is my web')
})

app.listen(post, () => {
    console.log(`Express is running on http://localhost:${post}`)
})