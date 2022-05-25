const { Sequelize } = require("sequelize");
require('dotenv').config()
console.log(process.env.database, process.env.user)
var sequelize = new Sequelize(process.env.database, process.env.user,"", {
  host: process.env.host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging : false
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log("connect to database");
      console.log("connected!!!!!!!!!!");
    
    } catch (err) {
      console.log("an error occurred: ", err);
    }
  })();

exports.sequelize = sequelize;