const { Sequelize } = require("sequelize");
var sequelize = new Sequelize(process.env.database, process.env.user,"", {
  host: process.env.host,
  dialect: process.env.dialect,
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
    } catch (err) {
      console.log("an error occurred: ", err);
    }
  })();

exports.sequelize = sequelize;