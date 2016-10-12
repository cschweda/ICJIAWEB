

module.exports = function(grunt) {
	grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {                       // Target options
			 		sourcemap: 'inline',
					style: 'compressed'
		 		},
				files: {
					'./dist/css/app.css' : './src/scss/style.scss'
				}
			}
		},

		watch: {
			css: {
				files: 'src/**/*.scss',
				tasks: ['sass']
			},
			js: {
				files: 'src/js/*.js',
				tasks: ['uglify']
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
        './dist/js/app.min.js': ['./src/js/*.js']
      }
    }
  }


	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['sass','uglify','watch']);
};
