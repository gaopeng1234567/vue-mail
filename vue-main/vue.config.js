module.exports = {
    devServer: {
        host: 'localhost',
        port: 8888,
        proxy: {
            '/api': {
                target: 'https://www.imooc.com',
                changeOrigin: true,//将出发点设置为原点
                pathRewrite:{
                    '/api':''//
                }
            }
        }
    }
}