module.exports = function (grunt) {

  var config = {

    coffee: {
      compile: {
        options: {
          join: true
        },
        files: {
          'lib/string_buffer.js':       ['src/*.coffee'],
          'test/string_buffer_spec.js': ['test-src/string_buffer_spec.coffee'],
          'examples.js':                ['test-src/examples.coffee']
        }
      }
    },

    jasmine : {
      src : 'lib/string_buffer.js',
      options : {
        specs : 'test/*.js'
      }
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', [ 'coffee', 'jasmine' ]);
};
