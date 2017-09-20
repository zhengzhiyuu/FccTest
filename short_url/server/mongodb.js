const db = require('monk')('localhost/shorturl')
db.then(() => {
    console.log('mongo is ok')
})

module.exports = db