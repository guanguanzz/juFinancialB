<<<<<<< HEAD
const path = require('path');
=======

>>>>>>> fdd86390f2b135d592a531ef7ee3199f9fbfef34
module.exports = {
    // ...
    // 基本路径
    publicPath: '/',

    devServer: {
        proxy: {
<<<<<<< HEAD
            '/api/': { //拦截名
                target: 'http://47.102.207.4:3000/mock/15/', //拦截跳转对象
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api/': '' //重写路径 拦截名边空
=======
            '/api/': {//拦截名
                target: 'http://47.102.207.4:3000/mock/15/',//拦截跳转对象
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api/': ''  //重写路径 拦截名边空
>>>>>>> fdd86390f2b135d592a531ef7ee3199f9fbfef34
                }
            }
        },
        // historyApiFallback: { 
        //   rewrites: [ 
        //   {from: /^.*/, to: '/'} 
        //   ] 
        // }
<<<<<<< HEAD

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
=======
        
    }
  }
>>>>>>> fdd86390f2b135d592a531ef7ee3199f9fbfef34
