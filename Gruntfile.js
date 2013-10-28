/* To prevent jshint from yelling at module.exports. */
/* jshint node:true */

'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	// Loads all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// App configuration
	var config = grunt.file.readJSON('config.json');

	// Tasks configuration
	grunt.initConfig({

		config: config,

		clean: {
			dest: {
				files: [{
					dot: true,
					src: [
						'<%= config.destination %>/*'
					]
				}]
			}
		},

		compass: {
			options: {
				sassDir: '<%= config.source %>/styles',
				cssDir: '<%= config.destination %>/css',
				force: true
			},
			dev: {
				options: {
					outputStyle: 'expanded'
				}
			},
			prod: {
				options: {
					outputStyle: 'compressed'
				}
			}
		},

		connect: {
			options: {
				port: config.port,
				hostname: config.hostname
			},
			source: {
				options: {
					middleware: function(connect) {
						return [
							lrSnippet,
							mountFolder(connect, config.destination),
							mountFolder(connect, config.source)
						];
					}
				}
			}
		},

		htmlmin: {
			prod: {
				options: {
					removeCommentsFromCDATA: true,
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= config.source %>',
					src: ['**/*.html'],
					dest: '<%= config.destination %>'
				}]
			}
		},

		open: {
			source: {
				path: 'http://<%= config.hostname %>:<%= config.port %>'
			}
		},

		shell: {
			options: {
				failOnError: true,
				stdout: true,
				stderr: true
			},
			deploy: {
				command: function () {
					grunt.log.ok('deploying to pedroduarte.me');
					return 'command here';
				}
			}
		},

		watch: {
			styles: {
				files: ['<%= config.source %>/styles/**/*.scss'],
				tasks: ['compass:dev']
			},
			served: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'<%= config.source %>/**/*.html',
					'<%= config.source %>/styles/**/*.scss'
				]
			}
		}
	});

	grunt.registerTask('serve', function() {
		if (grunt.option('target') === 'dest') {
			return grunt.task.run([
				'clean:dest',
				'htmlmin:prod',
				'compass:prod',
				'open:source',
				'connect:source',
				'watch'
			]);
		} else {
			return grunt.task.run([
				'clean:dest',
				'compass:dev',
				'open:source',
				'connect:source',
				'watch'
			]);
		}
	});

	grunt.registerTask('build', function() {
		return grunt.task.run([
			'clean:dest',
			'htmlmin:prod',
			'compass:prod'
		]);
	});

	grunt.registerTask('default', 'serve');

};
