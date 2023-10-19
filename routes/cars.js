var express = require("express");
var router = express.Router();
var carsCtrl = require("../controllers/cars");

/* GET users listing. */

router.get("/", carsCtrl.index);

module.exports = router;
