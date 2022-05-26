const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/connection.js");

var catalog = sequelize.define(
  "catalog",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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

catalog.saveCatalogData = async (body) => {
  let createCatalog = await catalog.create(body);

  let response = {
    id: createCatalog.id,
    name: createCatalog.name,
    description: createCatalog.description ? createCatalog.description : null,
    imageUrl: createCatalog.imageUrl ? createCatalog.imageUrl : null,
    price: {
      cost1: createCatalog.cost1,
      cost2: createCatalog.cost2 ? createCatalog.cost2 : null,
      cost3: createCatalog.cost3 ? createCatalog.cost3 : null,
    },
    req: {
      req1: createCatalog.req1,
      req2: createCatalog.req2 ? createCatalog.req2 : null,
      req3: createCatalog.req3 ? createCatalog.req3 : null,
    },
  };
  return response;
};

module.exports = { catalog };
