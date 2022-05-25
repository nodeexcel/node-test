const route = require('express').Router()
const catalog = require('../controller/catalog')


route.post('/catalog', catalog.create)

module.exports = route