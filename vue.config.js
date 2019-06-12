const path = require('path');
module.exports = {
    // ...
    // 基本路径
    publicPath: '/',
      devServer: {
        proxy: {
            '/api/': { //拦截名
                target: 'http://47.102.207.4:3000/mock/15/', //拦截跳转对象
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api/': '' //重写路径 拦截名边空
                }
            }
        },
        // historyApiFallback: { 
        //   rewrites: [ 
        //   {from: /^.*/, to: '/'} 
        //   ] 
        // }

    },
    pluginOptions: {
        'style-resources-loader': {
          patterns: [
            './src/assets/scss/mixin.scss'
          ],
          preProcessor: 'scss'
        }
    }
}
