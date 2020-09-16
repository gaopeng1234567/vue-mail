# vue-main

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 跨域是只存在于前端的
```
跨域是浏览器为了安全而作出的限制策略
浏览器请求必须遵循同源策略：同域名、同端口、同协议 
```

### 跨域解决方案
+ CORS跨域   
 ```
 服务端设计，前端直接调用。不需要前端做任何操作。
 ```
+ JSONP跨域
+ 代理跨域  通过修改nginx服务器配置来实现， 前端修改，后台不动 
### Storage封装
+ Cookie
+ localStorage
+ sessionStorage
```
存储大小: Cookie4K、Storage5M
有效期: Cookies拥有有效期，Storage永久储存
Cookie会发送到服务器端，存储在内存中，Storage只存储在浏览器端
路径：Cookie有路径限制，Storage只存储在域名下
API：Cookies没有特定API，Storage有对应API
```