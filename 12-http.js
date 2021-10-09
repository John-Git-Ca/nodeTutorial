const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("hello world");
    }
    if(req.url == '/about'){
        res.end("this is the about page")
    }
    res.end(`<h1>Oops!</h1>
    <p>we can't find the page</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000);