const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(301, {
        'Location': 'https://www.neswebs.com'
    })

    // console.log(response.getHeaders())

    response.end()
})

server.listen(8080)
console.log('Server is running at http://127.0.0.1:8080/')