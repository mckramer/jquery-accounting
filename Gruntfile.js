module.exports = function (grunt) {
  
  var connectPort = 9000;
  
  grunt.initConfig({
    // Metadata
    banner: '/*! <%= pkg.name %> (v<%= pkg.version %>) <%= grunt.template.today("dd-mm-yyyy") %> */',
    namespace: 'accounting',
    pkg: grunt.file.readJSON('package.json'),
    
    // Tasks
    clean: {
      min: ['jquery.<%= namespace %>.min.js']
    },
    connect: {
      options: {
        port: connectPort
      },
      test: {}
    },
    jshint: {
      all: ['Gruntfile.js', 'jquery.<%= namespace %>.js', 'test/**/*.js'],
      options: {
        // Override JSHint defaults
        laxcomma: true,
        globals: {
          accounting: true,
          jQuery: true
        },
        scripturl: true
      }
    },
    mocha: {
      options: {
        run: true
      },
      all: {
        options: {
          urls: ['http://localhost:9000/test/index.html']
        }
      }
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
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');
  
  grunt.registerTask('test', ['connect:test', 'mocha:all']);
  grunt.registerTask('default', ['jshint', 'mocha', 'clean', 'uglify']);
  
};