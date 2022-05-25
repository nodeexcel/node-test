const route = require('express').Router()
const Catalog = require('../model/Product')
const product = require('../controller/product')


route.post('/buyProduct', product.buyProduct)

module.exports = route