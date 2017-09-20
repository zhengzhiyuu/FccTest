let http = require('http'),
    url = require('url'),
    os = require('os')

let server = http.createServer((request, response) => {
    console.log(`${request.method} : ${request.url}`);
    let path = url.parse(request.url).pathname.slice(1)
    let parseUnix = new Date(path * 1000)
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let ip = getClientIp(request)
    let languages = request.headers['accept-language']
    let index = languages.indexOf(',')
    let language = languages.substr(0, index)
    let hostName = os.hostname()
    let info = {
        "ipaddress": ip,
        "language": language,
        "software": hostName
    }
    response.writeHead(200, {
        'Content-Type': 'text/json'
    })

    response.end(JSON.stringify(info))
})

server.listen(8080)
console.log('Server is running at http://127.0.0.1:8080/')

function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};