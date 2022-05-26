const route = require('express').Router()
const product = require('../controller/product')

route.post('/buyProduct', product.buyProduct)

module.exports = route