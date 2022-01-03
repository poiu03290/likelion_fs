const express = require('express')
const indexRouter = require('./router')
const aRouter = require('./router/a.js')
const bRouter = require('./router/b.js')
const cRouter = require('./router/c.js')
const about = require('./router/about')
const blog = require('./router/blog')
const contact = require('./router/contact')

const app = express()

app.use('/', indexRouter)
app.use('/a', aRouter)
app.use('/b', bRouter)
app.use('/c', cRouter)
app.use('/about', about)
app.use('/blog', blog)
app.use('/contact', contact)

app.use((req, res, next) => {
    res.status(404).send('악')
})

app.listen(8080)
