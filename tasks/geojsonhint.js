'use strict';

var geojsonhint = require('geojsonhint');

module.exports = function (grunt) {
	grunt.registerMultiTask('geojsonhint', 'Lint geojson files.', function () {
		var errorCount = 0;
		var errors;

		if (this.files !== null) {
			this.filesSrc.forEach(function (filepath) {
				errors = geojsonhint.hint(grunt.file.read(filepath));

				if (errors.length && errors.length > 0) {
					grunt.log.writeln('Hinting', filepath);
					errors.forEach(function (error) {
						grunt.log.writeln('['.red + 'L' + error.line + ']'.red + ':', error.message);
					});
					errorCount++;
					grunt.log.writeln();
				}
			});
			if (errorCount === 0) {
				grunt.log.ok(this.filesSrc.length, ' files without errors');
			} else {
				return false;
			}
		}
	});
};
