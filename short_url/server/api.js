const db = require('./mongodb')

const table = db.get('test')

const findUserUrl = async userUrl => {
    let data = await table.find({
        location: userUrl
    }).then(res => res)
    return data
}

const addShortUrl = async url => {
    table.insert({
        location: url,
        shorturl: `${new Date().getTime()}`
    })
}

const findShortUrl = async short => {
    let data = await table.find({
        shorturl: short
    }).then(res => res)
    return data
}

module.exports = {
    findUserUrl: findUserUrl,
    addShortUrl: addShortUrl,
    findShortUrl: findShortUrl
}