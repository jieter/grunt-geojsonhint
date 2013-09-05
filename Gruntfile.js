'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			src: [
				'Gruntfile.js',
				'tasks/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		geojsonhint : {
			good: [
				'node_modules/geojsonhint/test/data/good/*.geojson'
			],
			bad: [
				'node_modules/geojsonhint/test/data/bad/*.geojson'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadTasks('tasks/');

	grunt.registerTask('default', ['jshint']);
};