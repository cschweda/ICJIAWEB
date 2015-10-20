module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: [
					'js/app/*.js'
				],
				dest: 'js/<%= pkg.name %>.js',
			},
		},

		uglify: {
			target: {
				options: {
					sourceMap: true,
					compress: {
						drop_console: true
					}
				},
				files: {
					'js/<%= pkg.name %>.js': ['js/<%= pkg.name %>.js']
				}
			}
		},



		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"css/icjia.css": "less/main.less",
					"css/ilfvcc.css": "less/ilfvcc-main.less" // destination file and source file
				}
			}
		},

		watch: {
			js: {
				files: ['js/app/*.js'],
				tasks: ['concat'],
				options: {
					livereload: true,
				}
			},
			css: {
				files: ['less/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true,
					nospawn: true
				}
			}
		}


		// watch: {
		// 	styles: {
		// 		files: ['less/**/*.less'], // which files to watch
		// 		tasks: ['less'],
		// 		options: {
		// 			nospawn: true
		// 		}
		// 	}
		// }
	});


	grunt.registerTask('reduceViolence', ['concat:reduceViolence',
		'less:reduceViolence',
		'watch'
	]);
	grunt.registerTask('default', ['concat:dist', 'less', 'watch']);
	grunt.registerTask('deploy', ['concat', 'uglify', 'less', 'watch']);


};
