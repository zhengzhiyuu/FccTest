const api = require('./api')

const newShortUrl = async ctx => {
    const userUrl = ctx.params.name
    const data = await api.findUserUrl(userUrl)

    if (data.length !== 0) {
        ctx.response.body = JSON.stringify(info(userUrl, data))
    } else {
        api.addShortUrl(userUrl)
        const newData = await api.findUserUrl(userUrl)
        ctx.response.body = JSON.stringify(info(userUrl, newData))
    }
}

const shortRedirect = async ctx => {
    const short = ctx.params.name
    const result = await api.findShortUrl(short)
    console.log(result)
    if (result.length !== 0) {
        ctx.state = 301
        ctx.redirect(`http://${result[0]['location']}`)
    }

}

function info(userUrl, short) {
    const info = {
        "original_url": userUrl,
        "short_url": `127.0.0.1/${short[0]['shorturl']}`
    }
    return info
}

module.exports = {
    newShortUrl: newShortUrl,
    shortRedirect: shortRedirect
}