const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection.js");

var user = sequelize.define(
  "user",
  {
    address: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    cash1: {
        type: Sequelize.FLOAT
      },
      cash2: {
        type: Sequelize.FLOAT
      },
      cash3: {
        type: Sequelize.FLOAT
      },
  },
  {
    freezeTableName: true,
  }
);


user.sync();


module.exports = user;