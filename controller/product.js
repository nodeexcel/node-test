const { sequelize } = require("../config/connection");
var express = require("express");
const { user } = require("../model/user");
var app = express();
const { validationResult } = require("express-validator")

module.exports.buyProduct = async (req, res) => {
  try {
    const validation = validationResult(req);

    if(!validation.isEmpty()) {
        res.status(400).send(validation);
    }

    let data = await user.getUserData(req.body);
    res.send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.send({
      success: "false",
      errorMessage: error.errorMessage,
    });
  }
};
