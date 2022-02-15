const http = require("http")
http.createServer((request, response) => {
    request.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ a: 1 }, null, 3))
}).listen(8080, "127.0.0.1", () => {
    console.log("Server start listening 8080")
})