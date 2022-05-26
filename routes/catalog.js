const route = require('express').Router()
const catalog = require('../controller/catalog')
const validator = require('../middleware/validator')

route.post('/catalog', validator.catalogValidator, catalog.create)

module.exports = route