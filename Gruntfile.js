module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: './',
            srcJsPath: './public/js/',
            srcSassPath: './public/css/',
            srcImgPath: './public/images/',
            destPath: './public/dist/'
        },

        uglify: {
            compressjs: {
                files: {
                    '<%= meta.destPath %>base.min.js': ['<%= meta.srcJsPath %>zepto.min.js', '<%= meta.srcJsPath %>base.js']
                }
            }
        },

        // sass
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [
                    {'<%= meta.destPath %>style.min.css': '<%= meta.srcSassPath %>style.scss'}
                ]
            }
        },

        watch: {
            build: {
                files: [
                    '<%= meta.srcJsPath %>*.js', '<%= meta.srcSassPath %>*.scss'
                ],
                tasks: ['uglify', 'sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};