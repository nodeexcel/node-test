const { check } = require("express-validator");

const catalogValidator = [
  check("name", "name should not be empty").not().isEmpty(),
  check("req1", "req1 should not be empty").not().isEmpty(),
  check("catagory", "catagory should not be empty").not().isEmpty(),
  check("cost1", "cost1 should not be empty").not().isEmpty(),
];

const buyProductValidator = [
  check("address", "address should not be empty").not().isEmpty(),
];

module.exports = {
  catalogValidator,
  buyProductValidator,
};
