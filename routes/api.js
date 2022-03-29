const router = require("express").Router();
const apiController = require("../controllers/apiController");

router.get("/", apiController.root);

module.exports = router;
