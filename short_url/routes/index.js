const router = require('koa-router')()
const controller = require('../server/controller')

router.get('/new/:name', controller.newShortUrl)

router.get('/:name', controller.shortRedirect)


module.exports = router