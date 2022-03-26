import express from "express";
import config from "./config";
// 1.引入路由的文件
import userRouter from "./../rests/user";

// 引入中间件
import bodyParser from "./../middle_wares/body_parser";
import errorLog from "./../middle_wares/error_log";

// 2. 引入模板引擎
import nunjucks from "nunjucks";

const app = express();

const PORT = 1688;

// 3. 设置模板引擎
nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app,
  noCache: true,
});

// 4. 配置静态的资源
app.use(express.static(config.publicPath));
app.use("/node_modules", express.static(config.node_modules));

// 注意: 一定要走在所有的路由之前
app.use(bodyParser);

// 5. 挂载路由容器
app.use(userRouter);

// 6. 挂载错误中间件
app.use(errorLog);

app.listen(PORT, () => {
  console.log(`Server is running as ${PORT}`);
});
