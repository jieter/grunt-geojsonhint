grunt-geojsonhint
=================

Grunt task to run geojsonhint

### Usage

Install the plugin:
`npm install grunt-geojsonhint --save-dev`

Example `Gruntfile.js`:

```javascript
module.exports = function (grunt) {
	grunt.initConfig({
		geojsonhint : {
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
