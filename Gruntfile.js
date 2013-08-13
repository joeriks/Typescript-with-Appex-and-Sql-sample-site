module.exports = function (grunt) {

    grunt.initConfig({
        appex: {
            port: 3000,
            program: './program.ts'
        },
        serverport: 3000,
        watch: {},
        open: {
            app: {
                path: 'http://localhost:3000'
            }
        }
    });

    grunt.registerTask('server', 'Start a custom web server with appex in live mode', function () {

        grunt.log.writeln('Started web server on port ' + grunt.config('appex.port'));
        var appex = require('appex');
        var app = appex({ program: grunt.config('appex.program') });
        app.listen(grunt.config('serverport'));

        grunt.task.run('open');
        grunt.task.run('watch');

    });

    grunt.registerTask('dev', 'Start a web server with appex in dev mode', function () {

        grunt.log.writeln('Started web server on port ' + grunt.config('serverport'));
        var appex = require('appex');
        var app = appex({
            program: grunt.config('appex.program'),
            devmode: true,
            logging: true  });
        app.listen(grunt.config('appex.port'));

        grunt.task.run('open');
        grunt.task.run('watch');

    });

    grunt.registerTask('default', ['server']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

};