var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  assets: 'assets/',
  fonts: 'fonts/**',
  production: 'production/',
  server: './../Budgets.api',
  output: outputRoot,
  solution: './../Budgets.sln',
  release: { 
    styles: 'production/styles',
    assets: 'production/assets',
    fonts: 'production/fonts'
  },
  tests: 'test/unit/**/*.js',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  application: {
    config: 'src/configuration/config.js'
  }
};
