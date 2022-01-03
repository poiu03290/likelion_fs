const express = require('express')

const indexRouter = require('./router')
const blogRouter = require('./router/app2blog.js')

const app = express()

app.use('/', indexRouter)
app.use('/blog', blogRouter)

app.use((req, res, next) => {
    res.status(404).send('아악!!')
})

app.listen(8080)