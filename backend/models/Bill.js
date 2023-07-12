import mongoose from "mongoose";
mongoose.connect("mongodb://0.0.0.0/transsion");

const BillSchema = mongoose.Schema({
  // 账期
  occuring_date: String,
  // 财务单元
  financial_unit: String,
  // 账号ID
  u_id: String,
  // 账号
  id: String,
  // Owner账号ID
  owner_id: String,
  // Owner账号
  owner_account: String,
  // 产品Code
  product_code: String,
  // 产品
  product_name: String,
  // 产品明细Code
  product_detail_code: String,
  // 产品明细
  product_detail: String,
  // 业务类型
  business_type: String,
  // 消费类型
  fee_type: String,
  // 服务时长
  service_time: Number,
  // 时长单位
  time_unit: String,
  // 账单类型
  bill_type: String,
  // 计费方式
  charge_type: String,
  // 实例ID
  instance_id: String,
  // 实例昵称
  instance_name: String,
  // 资源组
  resource_group: String,
  // 实例标签
  instance_tag: String,
  // 实例配置
  instance_conf: String,
  // 实例规格
  instance_schema: String,
  // 公网IP
  e_ip: String,
  // 私网IP
  private_ip: String,
  // 地域
  region: String,
  // 可用区
  zoom: String,
  // 官网价
  official_price: Number,
  // 优惠金额
  bonus_price: Number,
  // 优惠券抵扣
  coupon: Number,
  // 应付金额
  amount_payable: Number,
  // 现金支付
  cash_payment: Number,
  // 代金券抵扣
  voucher: Number,
  // 储值卡支付金额
  payment_in_deposit: Number,
  //欠费金额
  fee_owed: Number,
  // 币种
  currency: String,
  // 信用额度退款抵扣
  credit_line_refund: String,
});

const Bill = mongoose.model("bills", BillSchema);
export default Bill;
