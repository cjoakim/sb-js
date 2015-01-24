module.exports = function (grunt) {

  var config = {

    coffee: {
      compile: {
        options: {
          join: false
        },
        files: {
          'examples.js':                ['src/examples.coffee'],
          'lib/string_buffer.js':       ['src/string_buffer.coffee'],
          'test/string_buffer_test.js': ['src/test/string_buffer_test.coffee']
        }
      }
    },

    mocha_istanbul: {
      coverage: {
        src: 'test', // the folder, not the files
        options: {
          coverageFolder: 'coverage',
          mask: '*_test.js',
          root: '/',
          mochaOptions: { slow: 200 }
        }
      }
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.registerTask('test', [ 'mocha_istanbul:coverage' ]);
  grunt.registerTask('default', [ 'coffee' ]);
};
