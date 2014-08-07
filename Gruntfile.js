module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            run: {
                configFile: 'frontend/build/tests/unit/karma.conf.js',
                singleRun: true
            },
            watch: {
                configFile: 'frontend/build/tests/unit/karma.conf.js',
                singleRun: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('startKarma', ['karma:watch']);
};