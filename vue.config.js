const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const deployPlugin = require('./webpackPlugins/deployPlugin.js')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '/'

//   ? '/sys/'
//   : '/sys/'

module.exports = {
    // Project deployment base
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'
    baseUrl: BASE_URL,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
    //   outputDir: process.env.outputDir || 'dist', // 'dist',
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
    },
    // 打包时不生成.map文件
    productionSourceMap: false,
    //
    /* configureWebpack:config=>{
        console.log('coeeeee-->',config)
        config.optimization.minimizer = [
            // new MyExampleWebpackPlugin({
            //     uglifyOptions: {
            //         compress: {
            //             warnings: false,
            //             drop_console: true, //console
            //             drop_debugger: true,
            //             pure_funcs: ['console.log'] //移除console
            //         }
            //     }
            // })
        ]
  
      }, */
    // 打包时生成.gz文件,nginx 需要开始对应的gzip支持;
    configureWebpack: config => {
        config.output.chunkFilename = process.env.NODE_ENV == 'production' ? 'js/[name].[chunkhash].js' : 'js/[name].[hash].js', // 给每个js文件添加chunkhash后会自动更新已经改动的文件，而没有改动的文件则继续使用缓存。
            console.log('process.env.NODE_ENV', process.env.NODE_ENV)
        config.output.filename = process.env.NODE_ENV == 'production' ? 'js/[name].[chunkhash].js' : 'js/[name].[hash].js'
        return {
            plugins: [
                new CompressionPlugin({
                    test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
                    threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
                    deleteOriginalAssets: false // 是否删除原文件
                }),
                new deployPlugin()
            ]
        }
    },

    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        // proxy: 'http://127.0.0.1:7005'
        proxy: {
            '/json': {
                target: 'http://127.0.0.1:7001'
            },
            '/demo': {
                target: 'http://127.0.0.1:7001'
            },
            '/ner': {
                target: 'http://192.168.198.229:28580'
                // target: 'http://127.0.0.1:18881' 
            },
            '/dept': {
                target: 'http://192.168.198.229:28480'
            },
            '/diagnosis': {
                target: 'http://192.168.198.229:28380'
            },
        }
    }

}
