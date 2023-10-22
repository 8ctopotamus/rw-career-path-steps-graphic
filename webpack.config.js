const path = require('path')
const process = require('process')
const HandlebarsPlugin = require('handlebars-webpack-plugin')

module.exports = {
	plugins: [
		new HandlebarsPlugin({
			entry: './src/*.hbs',
			output: './dist/[name].html',
			data: require('./src/data/rw.json'),
			onBeforeRender: function (Handlebars, data, filename) { 
				console.log('running...', data, filename)
				 
			},
		}),
	],
}
