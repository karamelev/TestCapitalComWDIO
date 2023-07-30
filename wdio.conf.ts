import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        "./test/*.ts"
        // ToDo: define location for spec files here
    ],

    // exclude: [
    //
    // ],

    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome', // or "firefox", "microsoftedge", "safari"
        acceptInsecureCerts: true
    }],
    logLevel: "silent",

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 100000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
