import express from "express";
import Bill from "./../models/Bill";
const router = express.Router({});

/**
 * 获取分类列表
 */
router.get("/bill/api/list", (req, res, next) => {
  Bill.find().exec((err, categorys) => {
    if (err) {
      return next(err);
    }
    res.json({
      status_code: 200,
      result: categorys,
    });
  });
});

module.exports = router;
