const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection.js");
var user = sequelize.define(
  "user",
  {
    address: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    cash1: {
      type: Sequelize.FLOAT,
    },
    cash2: {
      type: Sequelize.FLOAT,
    },
    cash3: {
      type: Sequelize.FLOAT,
    },
  },
  {
    freezeTableName: true,
  }
);

user.sync();

user.getUserData = async (body) => {
  let userData = await user.findAll({
    where: { address: body.address },
    include: "addressID",
  });
  return userData;
};

module.exports = { user };
