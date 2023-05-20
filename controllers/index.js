const router = require("express").Router();
const home = require("./home.js")
const users = require("./users");
const api = require("./api");

router.use("/home");
router.use("api");

module.exports = router;