exports.config = {
  onPrepare: function () {
    browser.ignoreSynchronization = true
    browser.driver.manage().window().maximize()
  },
  directConnect: true,
  allScriptsTimeout: 99999,
  getPageTimeout: 120000,
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'custom', // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'e2e/**/*.feature'
  ],
  cucumberOpts: {
    require: [
      'e2e/step-defs/**/*.js',
      // walnutjs
      'node_modules/walnutjs/src/step_defs/**/*.js',
      'node_modules/walnutjs/src/support/**/*.js'
    ],
    // tags: '@login',
    format: 'pretty'
  },
  resultJsonOutputFile: './e2e/report/results.json',
  walnutjsOpts: {
    projectName: 'easynvest.e2e.app',
    enableDebugLog: false,
    waitElementTimeout: 20000,
    evidencesPath: './e2e/report/evidences/',
    parametersPath: './e2e/variables.json',
    locatorsPath: './e2e/locators/'
  }
}
