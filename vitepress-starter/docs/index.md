# Hello VitePress
$1+1$

## latex test
`行内代码`
$$\frac{1}{2}$$

## 33
> sss
```shell
sudo su
```

# 使用VitePress和Github搭建个人博客网站.md

```shell
git clone git@github.com:soul667/winds-of-dream.git
```

## 搭建教程(搭建！)
1. github 创建一个仓库
2. clone 到本地
3. 初始化 
4.安装nodejs和一些依赖
```shell
sudo apt install nodejs npm
npm install -g yarn
mkdir vitepress-starter && cd vitepress-starter
yarn init winds-of-dream
yarn add --dev vitepress --ignore-engines # 添加vitepress
mkdir docs && echo '# Hello VitePress' > docs/index.md # 创建第一个文档
```
add below in `package.json`
```json
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }

```
```shell
docs:dev
```
## 添加latex公式支持
[vitepress解析展示LaTeX数学公式](https://blog.csdn.net/woaidouya123/article/details/127275642)
### error

> The engine "node" is incompatible with this module. Expected version "^14.18.0 || >=16.0.0". Got "12.22.9"
error Found incompatible module.

```shell
yarn config set ignore-engines true
```

> (node:49330) UnhandledPromiseRejectionWarning: Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'fs' imported from /home/ubuntu/data/RM/winds-of-dream/vitepress-starter/node_modules/vitepress/dist/node/cli.js

更新node
```shell
sudo npm install n -g
sudo n stable
```
## Travis CI 挂载
## 参考阅读
[【保姆级】VitePress 新建项目+部署Github Pages流程+常见报错处理](https://zhuanlan.zhihu.com/p/562139569)
[VitePress中文网教程](https://vitejs.cn/vitepress/guide/deploy.html#%E6%9E%84%E5%BB%BA%E6%96%87%E6%A1%A3)