import express from "express";
const router = express.Router({});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", descr: "Express API Center" });
});

module.exports = router;
