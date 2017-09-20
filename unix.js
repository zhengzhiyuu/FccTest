let http = require('http'),
    url = require('url')

let server = http.createServer((request, response) => {
    console.log(`${request.method} : ${request.url}`);
    let path = url.parse(request.url).pathname.slice(1)
    let parseUnix = new Date(path * 1000)
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let unix = {}
    let reg = /^\d*$/

    if (reg.test(path)) {
        unix = {
            "unix": path,
            "natural": `${month[parseUnix.getMonth()]} ${parseUnix.getDate()}, ${parseUnix.getFullYear()}`
        }
    } else {
        unix = {
            "unix": new Date(decodeURI(path)).getTime() / 1000,
            "natural": decodeURI(path)
        }
    }

    response.writeHead(200, {
        'Content-Type': 'text/json'
    })

    response.end(JSON.stringify(unix))
})

server.listen(8080)
console.log('Server is running at http://127.0.0.1:8080/')
