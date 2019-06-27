module.exports = function(config) {
    config.set({
        frameworks : ['jasmine', 'requirejs', 'promise'],
        files : [
            { pattern: 'src/main/webapp/js/**/*.js', included: false },
            { pattern: 'src/test/resources/js/*-test.js', included: false },
            'src/test/resources/js/test-main.js'
        ],
        exclude : [
            'src/main/webapp/js/main.js'
        ],
        browsers: ['PhantomJS'],
        // browsers: ['Chrome'] // Used for debug
        
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/main/webapp/js/*.js': ['coverage'],
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    })
}