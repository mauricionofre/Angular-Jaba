var webpackConfig = require('./webpack.config.test');
var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/build/angular-ui-router.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/*.test.js'
        ],
        preprocessors: {
            'app/**/*.test.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        customLaunchers: {
            Chrome_with_debugging: {
                base: 'Chrome',
                chromeDataDir: path.resolve(__dirname, '.chrome')
            }
        },
        singleRun: false,
        browserNoActivityTimeout: 60000,
        concurrency: Infinity,
        client: {
            captureConsole: true
        }
    });
};
