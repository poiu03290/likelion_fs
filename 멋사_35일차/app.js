const http = require('http')
const fs = require('fs')
const app = http.createServer(function(req, res) {
    let url = req.url
    console.log(req)
    console.log(req.url)
    if(req.url === '/') {
        url = '/index.html'
    } else if (req.url === '/blog') {
        url = '/blog.html'
    } else if (req.url === '/favicon.ico') {
        return res.writeHead(404)
    } else {
        res.writeHead(404)
        res.end('Not found')
    }
    res.writeHead(200)
    res.end(fs.readFileSync(__dirname + url))
})

app.listen(3000)