const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    console.log('get요청')
    res.send('<h1>hello world</h1>')
})

app.listen(8080)