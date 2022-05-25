const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection.js");

var catalog = sequelize.define(
  "catalog",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    cost1: {
      type: Sequelize.INTEGER,
    },
    cost2: {
      type: Sequelize.INTEGER,
    },
    cost3: {
      type: Sequelize.INTEGER,
    },
    req1: {
      type: Sequelize.INTEGER,
    },
    req2: {
      type: Sequelize.INTEGER,
    },
    req3: {
      type: Sequelize.INTEGER,
    },
    catagory: {
        type: Sequelize.INTEGER,
      },
  },
  {
    freezeTableName: true,
  }
);


catalog.sync();


module.exports = catalog;