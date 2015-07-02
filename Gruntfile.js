

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ["install-chrome-dialog.js"],
            options: {
                sub: true,
                eqeqeq: true, // no == or !=
                immed: true, // forces () around directly called functions
                forin: true, // makes it harder to use for in
                latedef: "nofunc", // makes it impossible to use a variable before it is declared
                newcap: true, // force capitalized constructors
                strict: true, // enforce strict mode
                trailing: true, // trailing whitespaces are ugly
                camelcase: true, // force camelCase
                es3: true,
            },
        },
        uglify: {
            dist: {
                files: {
                    'install-chrome-dialog.min.js': ["install-chrome-dialog.js"],
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify']);

};