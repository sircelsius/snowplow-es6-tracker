var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS' ],
        singleRun: true,
        frameworks: [ 'mocha' ],
        files: [
            'spec/index.js',
            { pattern: 'lib/**/*', watched: false, included: false, served: true, nocache: true },
        ],
        plugins: [ 'karma-phantomjs-launcher', 'karma-chai', 'karma-mocha',
            'karma-webpack', 'karma-coverage', 'karma-mocha-reporter'
        ],
        preprocessors: {
            'spec/index.js': [ 'webpack' ], //preprocess with webpack
        },
        reporters: [ 'mocha', 'coverage' ], //report results in this format
        webpack: {
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                }]
            }
        },
        webpackServer: {
            noInfo: true
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
                    type: 'lcov',
                    subdir: '.'
                },
                {
                    type: 'html',
                    subdir: 'report-html'
                }
            ]
        }
    });
};
