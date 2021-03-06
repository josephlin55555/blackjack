module.exports = function(grunt) {
  grunt.initConfig({
    //pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'js/*.js']
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: '',
        src: ['*.coffee','src/**/*.coffee','spec/*.coffee'],
        dest: 'compiled/',
        ext: '.js'
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js','js/*.js'],
        tasks: 'jshint',
        options : {
          livereload: true
          // Place the script below in the main html file
          // <script src="//localhost:35729/livereload.js"></script>
        }
      },
      css: {
        files: ['styles/*.css'],
        options : {
          livereload: true
        }
      },
      html: {
        files: ['*.html'],
        options : {
          livereload: true
        }
      },
      coffeescripts: {
        files: ['src/**/*.coffee','spec/*.coffee'],
        tasks: 'coffee',
        options : {
          livereload: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['watch']);
};
