import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/industry-analysis");

const userSchema = mongoose.Schema({
  // 用户名
  user_name: { type: String, required: true },
  // 密码
  user_pwd: { type: String, required: true },
  // 邮箱
  user_email: { type: String, required: false },
  // 创建时间
  c_time: { type: Date, default: Date.now },
  // 编辑时间
  m_time: { type: Date, default: Date.now },
});

const User = mongoose.model("users", userSchema);
export default User;
