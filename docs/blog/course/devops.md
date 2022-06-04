# 项目部署

## 前端部署

### Vue 项目

::: tip Vue 项目
部署到Linux
:::

```
环境配置：需要npm、nginx

服务器上没有环境
npm install --unsafe-perm -registry=https://registry.npm.taobao.org

--unsafe-perm。：防止权限问题
-registry=https://registry.npm.taobao.org ： 淘宝镜像源

安装nginx(推荐docker启动部署)
```

（2）项目打包

```
npm run build
或者打成生产环境包
npm run build:prod
```

（3）包文件上传

```
vue项目打包之后会在项目目录下面生产一个dist文件夹。文件夹里面有个index.html。这是一个入口文件
上传dist文件夹到服务器
```

（4）nginx配置

```
nginx配置文件nginx.confg 配置端口，
比如设置8080端口，浏览器访问 ip:8080 之后就转发到dist文件夹目录下面的index.html
```

### vuepress项目

::: tip vuepress静态网站部署
使用宝塔部署

:::

1、打包

```
打包命令在package.json里面
vuepress build docs
```

2、上传

```
上传dist打包文件到服务器
```

3、宝塔配置

```
登陆宝塔面板==》网站==〉添加站点==》域名可以填服务器IP:端口号，
根目录选择上传的dist文件，其他不用配置==〉提交
```

4、访问

```
访问上面的IP:端口号
```



## 后端部署

docker 部署