var path = require('path');
var webpack = require('webpack');

var jsEntryPath = path.resolve(__dirname, 'snow.js');
var htmlEntryPath = path.resolve(__dirname, '.', 'index.html');
var buildPath = path.resolve(__dirname, '..', 'public', 'build');

module.exports = {
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        'webpack-hot-middleware/client?reload=true',
        jsEntryPath,
        htmlEntryPath
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    // plugins: ['transform-object-assign'],
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
