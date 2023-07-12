const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const XLSX = require("xlsx");
const multer = require("multer");

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// connect to db
mongoose
  .connect("mongodb://0.0.0.0:27017/transsion")
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("error", error);
  });

// init app
const app = express();

// set the template engine
app.set("view engine", "ejs");

// fetch data from the request
app.use(bodyParser.urlencoded({ extended: false }));

// static folder path
app.use(express.static(path.resolve(__dirname, "public")));

// collection schema
const excelSchema = new mongoose.Schema({
  occuring_date: String,
  financial_unit: String,
  u_id: String,
  id: String,
  owner_id: String,
  owner_account: String,
  product_code: String,
  product_name: String,
  product_detail_code: String,
  product_detail: String,
  business_type: String,
  fee_type: String,
  service_time: Number,
  time_unit: String,
  bill_type: String,
  charge_type: String,
  instance_id: String,
  instance_name: String,
  resource_group: String,
  instance_tag: String,
  instance_conf: String,
  instance_schema: String,
  e_ip: String,
  private_ip: String,
  region: String,
  zoom: String,
  official_price: Number,
  bonus_price: Number,
  coupon: Number,
  amount_payable: Number,
  cash_payment: Number,
  voucher: Number,
  payment_in_deposit: Number,
  fee_owed: Number,
  currency: String,
  credit_line_refund: String,
});

const excelModel = mongoose.model("bills", excelSchema);

app.get("/", (req, res) => {
  excelModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data != "") {
        res.render("home", { result: data });
      } else {
        res.render("home", { result: {} });
      }
    }
  });
});

app.post("/", upload.single("excel"), (req, res) => {
  const workbook = XLSX.readFile(req.file.path);
  const sheet_namelist = workbook.SheetNames;
  let x = 0;
  sheet_namelist.forEach((element) => {
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
    excelModel.insertMany(xlData, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
    x++;
  });
  res.redirect("/");
});

const port = process.env.PORT || 4600;
app.listen(port, () => console.log("Server run at " + port));
