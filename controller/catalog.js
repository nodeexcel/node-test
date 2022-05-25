const {sequelize} = require('../config/connection')
var express = require("express");
const { catalog,user,asset } = require("../model");
var app = express();


module.exports.create = async (req, res) => {
    try {
        let { name, description, imageUrl, cost1, cost2, cost3, req1, req2, req3, catagory } = req.body;

        if (!(name, cost1, req1, catagory))
        throw new Error(
          "Sorry !!! name, cost1, req1, catagory is required"
        );

        let createCatalog = await catalog.create(req.body);


        let response = {id : createCatalog.id,
                        name : createCatalog.name,
                        description : createCatalog.description  ? createCatalog.description : null,
                        imageUrl : createCatalog.imageUrl ? createCatalog.imageUrl : null,
                        price : {
                            cost1 : createCatalog.cost1,
                            cost2 : createCatalog.cost2 ? createCatalog.cost2 : null,
                            cost3 : createCatalog.cost3 ? createCatalog.cost3 : null
                        },
                        req : {
                            req1 : createCatalog.req1,
                            req2 : createCatalog.req2 ? createCatalog.req2 : null,
                            req3 : createCatalog.req3 ? createCatalog.req3 : null
                        }
        }

        res.send(response)
    }
    catch (error) {
        res.send(error.message)
    }
}