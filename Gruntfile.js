module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['problems/**/*.js','test/spec/*.js','Gruntfile.js']
    },
    concat: {
      scripts: {
        src: ['problems/**/*.js'],
        dest: 'problems/problems.js'
      }
    },
    watch: {
      scripts: {
        files: ['problems/**/*.js','test/spec/*.js','Gruntfile.js'],
        tasks: ['jshint','concat'],
        options : {
          livereload: true
        }
      },
      html: {
        files: ['test/index.html'],
        options : {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          livereload: true,
          open: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['connect','watch']);
};