const {sequelize} = require('../config/connection')
var express = require("express");
const { product } = require("../model");
const { user } = require("../model");


var app = express();

module.exports.buyProduct = async (req, res) => {
    try {
        let {id, address} = req.body;
        let buyProduct = await user.findAll({ where: { address: address},include:"addressID" });
 
        res.send({
            success : true,
            data: buyProduct
        })
    }
    catch (error) {
        console.log(error);
        res.send({
            success : "false",
            errorMessage : error.errorMessage
        })
    }
}