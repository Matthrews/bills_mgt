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

# 1. 安装依赖
cd backend && npm install

# 2. 启动后端服务
npm run dev

# 3. 安装依赖
cd web && npm install

# 4. 启动前端服务
npm run start
```

详细请参考【操作步骤说明.docx】

## 项目目录说明

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
```
