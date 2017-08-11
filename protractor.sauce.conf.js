/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

var buildNumber = 'travis-build#' + process.env.TRAVIS_BUILD_NUMBER;

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME, 
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  allScriptsTimeout: 11000,
  specs: [
    './tmp/e2e/**/*.e2e-spec.js'
  ],
  multiCapabilities: [
    {
      browserName: 'safari',
      platform: 'OS X 10.11',
      name: "safari-osx-tests",
      shardTestFiles: true,
      maxInstances: 5
    }
  ],
  sauceBuild: buildNumber,
  directConnect: false,
  baseUrl: 'https://adriancarriger.github.io/clean-to-the-core/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};