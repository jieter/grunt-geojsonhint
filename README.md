grunt-geojsonhint
=================

Grunt task to run [geojsonhint](https://github.com/mapbox/geojsonhint).

### Usage

Install the plugin: `npm install grunt-geojsonhint --save-dev`,
add it to your `Gruntfile.js`: `grunt.loadNpmTasks('grunt-geojsonhint');`,
add a target for the files you want to lint: 
```
geojsonhint: {
	files: [
		'node_modules/geojsonhint/test/data/good/*.geojson'
	]
}
```

Example `Gruntfile.js`:

```javascript
module.exports = function (grunt) {
	grunt.initConfig({
		geojsonhint: {
			good: [
				'node_modules/geojsonhint/test/data/good/*.geojson'
			],
			bad: [
				'node_modules/geojsonhint/test/data/bad/*.geojson'
			]
		}
	});

	grunt.loadNpmTasks('grunt-geojsonhint');

	grunt.registerTask('default', ['geojsonhint']);
}
```
