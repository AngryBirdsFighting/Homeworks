let path = require("path"), webpack = require("webpack")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
var DEBUG = process.env.NODE_ENV === 'development'

let isExtract = DEBUG ? "style-loader" : MiniCssExtractPlugin.loader
module.exports = {
    mode: DEBUG ? "development" : "production", 
    entry:["@babel/polyfill","./src/index.js"],
    output:{
        filename:'[name].[chunkhash:8].js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use: [isExtract, 'css-loader','postcss-loader', 'sass-loader']
            },
            {
                test:/.js$/,
                exclude:/node_modules/,
                include:path.resolve('src'),
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env",'@babel/preset-react'],
                        plugins:[
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }]
            },
            {
                test:/.jsx$/,
                exclude:/node_modules/,
                include:path.resolve('src'),
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env",'@babel/preset-react'],
                        plugins:[
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [{
                    loader: "url-loader",
                    query: {
                        limit: 40000,
                        name: "image/[name]-[hash:5].[ext]"
                    }
                },
                {
                    loader: "image-webpack-loader"
                }]
            },
            {   // 对字体资源文件使用url-loader
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
        }),
        new MiniCssExtractPlugin({
        　　filename: "[name].[chunkhash:8].css",
        　　chunkFilename: "[id].css"
        })
    ],
    optimization: {
    splitChunks: {
        chunks: "all",
        cacheGroups: {
            // 打包第三方库
            vendor: {
            test: /[\/]node_modules[\/]/,
            chunks: "initial" 
          }
        }
      }
    },
    devServer:{
        port:3000,
        open:true,
        contentBase:'./dist/'
    }
}