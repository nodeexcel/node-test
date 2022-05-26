const { catalog } = require("../model");
const { validationResult } = require("express-validator")
module.exports.create = async (req, res) => {
  try {
    const validation = validationResult(req);

    if(!validation.isEmpty()) {
        res.status(400).send(validation);
    }

    let response = await catalog.saveCatalogData(req.body);
    res.send({
      status: 0,
      message: "Catalog Data Saved",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: error.message,
    });
  }
};
