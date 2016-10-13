

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
			},
			// html: {
			// 	files: 'src/**/*.html',
			// 	tasks: ['copy']
			// }

		},

		copy: {
  		images: {
    		expand: true,
    		cwd: 'src/img/',
    		src: '**',
    		dest: 'dist/img/',
    		flatten: true,
    		filter: 'isFile',
  		},
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default',['copy','sass','uglify','watch']);
};
