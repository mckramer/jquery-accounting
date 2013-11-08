module.exports = function (grunt) {
  
  grunt.initConfig({
    // Metadata
    banner: '/*! <%= pkg.name %> (v<%= pkg.version %>) <%= grunt.template.today("dd-mm-yyyy") %> */',
    namespace: 'accounting',
    pkg: grunt.file.readJSON('package.json'),
    
    // Tasks
    clean: {
      min: ['jquery.<%= namespace %>.min.js']
    },
    jshint: {
      files: ['gruntfile.js', 'jquery.<%= namespace %>.js', 'test/**/*.js'],
      options: {
        // Override JSHint defaults
        laxcomma: true,
        globals: {
          accounting: true,
          jQuery: true
        }
      }
    },
    mocha: {
      all: ['test/index.html'],
      options: { run: true }
    },
    uglify: {
      options: {
        banner: '<%= banner %>\n'
      },
      dist: {
        files: {
          'jquery.<%= namespace %>.min.js': ['jquery.<%= namespace %>.js']
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'mocha']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');
  
  grunt.registerTask('test', ['jshint', 'mocha']);
  grunt.registerTask('default', ['jshint', 'mocha', 'clean', 'uglify']);
  
};