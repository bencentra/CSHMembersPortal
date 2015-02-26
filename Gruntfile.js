/*
* Gruntfile for members-redesign
*/
module.exports = function(grunt) {

// Project config
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  // Minify CSS - https://github.com/gruntjs/grunt-contrib-cssmin
  cssmin: {
    target: {
      files: {
        'css/members.min.css': ['vendor/css/bootstrap.min.css', 'bootstrap-csh/release/members.min.css', 'members-icons/css/members_icons.css', 'css/members.css']
      }
    }
  },
  // Minify JS - https://github.com/gruntjs/grunt-contrib-uglify
  uglify: {
    options: {
      sourceMap: true
    },
    min: {
      files: {
          'js/app.min.js': [ 'vendor/js/jquery-2.1.3.min.js', 'vendor/js/bootstrap.min.js', 'vendor/js/angular.min.js', 'js/app.js' ]
      }
    }
  },
  // Copy Files - https://github.com/gruntjs/grunt-contrib-copy
  copy: {
    main: {
      files: [
        {src: ['members-icons/img/members_icons.svg'], dest: 'img/members_icons.svg'}
      ]
    }
  },
  // Run a local server
  connect: {
    default: {
      options: {
        port: 9001,
        keepalive: true,
        base: './',
        hostname: '*',
        open: {
          target: 'http://localhost:9001/'
        }
      }
    }
  }
});

// Load plugins
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-copy');
// grunt.loadNpmTasks('grunt-contrib-watch');

// Register tasks
grunt.registerTask('build', ['cssmin', 'uglify', 'copy']);
grunt.registerTask('serve', ['connect:default']);
grunt.registerTask('default', ['serve']);

};