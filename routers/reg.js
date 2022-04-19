const express = require("express");
const router = express.Router();
const path = require("path")
const ejs = require('ejs')

router
    .route("/reg")
    .get((req, res) => res.render(path.resolve("pages/reg.ejs")))
    .post((req, res) => res.render(path.resolve("pages/reg.ejs")));
module.exports = router;