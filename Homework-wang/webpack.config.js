let path = require("path"), webpack = require("webpack")
let HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:"development", // 生产环境有tree-shaking模式， 会自动去除掉 import***** 中没有使用的模块， scope hosting 模式， 会自动省略一些可以简化的代码
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        // noParse://, //对于一些单独的包（没有引用其他第三方包的） 不去解析他的依赖关系 ， 优化打包速度
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader','postcss-loader', 'sass-loader']
            },
            {
                test:/.js$/,
                exclude:/node_modules/,// 排除解析目录 优化打包速度
                include:path.resolve('src'),// 指定解析目录 优化打包速度
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env",'@babel/preset-react'] 
                    }
                }]
            },
            {
                test:/.jsx$/,
                exclude:/node_modules/,// 排除解析目录 优化打包速度
                include:path.resolve('src'),// 指定解析目录 优化打包速度
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env",'@babel/preset-react'] 
                    }
                }]
            },
            {   // 对字体资源文件使用url-loader
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            },
            {   // 优化svg文件 
                test: /\.svg$/,
                use: ['svg-inline-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
        }),
    ],
    devServer:{
        port:3000,
        open:true,
        contentBase:'./dist/'
    }
}