const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection.js");
const user = require("./User.js");

var product = sequelize.define(
  "product",
  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    //   address: {
    //     type: Sequelize.STRING,
    //     primaryKey: true
    //   },
  },
  {
    freezeTableName: true,
  }
);

user.hasMany(product,{foreignKey: "userAddress", as: "addressId" })
product.sync();


module.exports = product;