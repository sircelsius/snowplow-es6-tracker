var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS' ], //run in PhantomJS
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            'spec/index.js', //just load this file
            { pattern: 'lib/**/*', watched: false, included: false, served: true, nocache: true },
        ],
        plugins: [ 'karma-phantomjs-launcher', 'karma-chai', 'karma-mocha',
            'karma-webpack', 'karma-coverage',
            'karma-mocha-reporter', 'karma-sourcemap-loader'
        ],
        preprocessors: {
            'spec/index.js': [ 'webpack', 'sourcemap' ], //preprocess with webpack
        },
        reporters: [ 'mocha', 'coverage' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            // devtool: 'sourcemap', //just do inline source maps instead of the default
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'cobertura.txt'
                },
                {
                    type: 'html',
                    subdir: 'report-html'
                },
                {
                    type: 'lcov',
                    subdir: '.'
                }
            ]
        }
    });
};
