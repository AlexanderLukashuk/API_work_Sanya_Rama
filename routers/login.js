const express = require("express");
const router = express.Router();
const path = require("path")
const ejs = require('ejs')

router
    .route("/login")
    .get((req, res) => res.render(path.resolve("pages/login.ejs")))
    .post((req, res) => res.render(path.resolve("pages/login.ejs")));
module.exports = router;