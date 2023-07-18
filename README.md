# Bill Management Page

账单管理系统

- [Done] 展示账单数据

- [Done] 搜索，导出 Excel

- [Done] 计算总费用，分组列：实例标签，资源组

## 环境说明

硬件： Windows 11 Pro

软件清单：

- Node v14.16.0

- npm v8.5.0

- MongoDB Community Server v4.2.19

- MongoDB Compass v1.26.1

## 操作说明

```bash
# 1. 启动工具服务
cd util && npm install && npm run dev
# 启动后访问：http://localhost:4600

# 2. 启动后端服务
cd backend && npm install && npm run dev
# 启动后访问：http://localhost:1688

# 3. 启动前端
cd web && npm install && npm run start
# 启动后访问：http://localhost:3000
```

详细请参考【操作步骤说明.docx】

## 项目目录说明

- util    Excel 导入数据库服务
- backend 后端服务， 业务 CRUD
- web     前端页面

```tree
industry-analysis-platform
└───web
    ├───public
    └───src
        ├───assets
        │   └───imgs
        ├───components
        │   └───Login
        ├───data
        ├───network
        ├───routes
        │   ├───ErrorPage
        │   ├───Home
        │   └───Login
        ├───store
        ├───style
        └───util
    backend
    ├───public
    ├───src
    │   ├───assets
    │   │   └───imgs
    │   ├───components
    │   │   └───Login
    │   ├───data
    │   ├───network
    │   ├───routes
    │   │   ├───ErrorPage
    │   │   ├───Home
    │   │   └───Login
    │   ├───store
    │   ├───style
    │   └───util
    ├───middle_wares
    ├───models
    │   ├───User
    │   ├───Stats
    │   └───Error
    ├───rest
    │   └───user
    └───views
    util
    ├───public
    ├───middle_wares
    ├───app.js
    └───views
```
