var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const path = require('path');

const pageName = process.env.PAGE_NAME;
const moduleName = process.env.MODULES;

module.exports = {
    mode: 'development',
    cache: true,

    entry: {
        [pageName]: `./pages/${moduleName}/${pageName}/index.ts`
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, `dist/${pageName}`),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.(ts)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        alias: {}
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: `./public/index.html`
    }),
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
        port: 90,
        hot: true,
        compress: true,
    }
}