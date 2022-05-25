const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection.js");
const user = require("./User.js");

var asset = sequelize.define(
  "asset",
  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    type:{
      type: Sequelize.INTEGER,
    },
    level: {
        type:Sequelize.INTEGER
    }
  },
  {
    freezeTableName: true,
  }
);
// asset.belongsTo(user,{foreignKey:""})
user.hasMany(asset,{foreignKey: "userAddress", as: "addressID" })

asset.sync();


module.exports = asset;