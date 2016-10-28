module.exports = function(grunt) {
	var mozjpeg = require('imagemin-mozjpeg');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'./dist/css/app.css' : 'scss/imports.scss'
				}
			}
		},
    uglify: {
  	options: {
      mangle: false,
			sourceMap: true,
      sourceMapName: './dist/js/app.min.map'
    },
    dist: {
      files: {
        './dist/js/app.min.js': ['./scss/vendor/materialize-src 2/js/bin/materialize.min.js','./js/app.js']
      }
    }
  },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
      js: {
				files: './js/*.js',
				tasks: ['uglify']
			}
		},


		imagemin: {                          // Task

    dynamic: {
			options: {                       // Target options
        optimizationLevel: 5
      },                      // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: './',                   // Src matches are relative to this path
        src: ['img/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'dist/'                  // Destination path prefix
      }]
    }
  }




	});
	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['sass','uglify','imagemin','watch']);
}
