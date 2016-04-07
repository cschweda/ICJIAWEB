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
				dest: 'js/icjia.js',
			},
			mvtpc: {
				src: [
					'js/mvtpc/*.js'
				],
				dest: 'js/mvtpc.js',
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
					'js/icjia.js': ['js/icjia.js'],
					'js/mvtpc.js': ['js/mvtpc.js']
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
					"css/icjia.css": "less/icjia-main.less",
					"css/ifvcc.css": "less/ifvcc-main.less",
					"css/mvtpc.css": "less/mvtpc-main.less" // destination file and source file
				}
			}
		},

		watch: {
			js: {
				files: ['js/app/*.js', 'js/mvtpc/*.js'],
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



	grunt.registerTask('default', ['concat', 'less', 'watch']);
	grunt.registerTask('deploy', ['concat', 'uglify', 'less', 'watch']);


};
