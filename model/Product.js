const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection.js");
const { user } = require("./user.js");
var product = sequelize.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  }
);

user.hasMany(product, { foreignKey: "userAddress", as: "addressId" });
product.sync();

module.exports = product;
