const path = require('path')
const process = require('process')
const HandlebarsPlugin = require('handlebars-webpack-plugin')

module.exports = {
	plugins: [
		new HandlebarsPlugin({
			entry: './src/*.hbs',
			output: './dist/[name].html',
			data: require('./src/data/rw.json'),
			partials: [
				"./src/partials/*.hbs",
			],
			onBeforeRender: function (Handlebars, data, filename) { 
				console.log(filename)
				console.log(data)				 
			},
		}),
	],
}
