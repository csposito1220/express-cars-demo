const Car = require("../models/cars");

function index(req, res) {
  res.render("cars/index", {
    cars: Car.getAll(),
    title: "All Cars",
  });
}

module.exports = {
  index,
};
