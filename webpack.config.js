const path = require('path')
const process = require('process')
const HandlebarsPlugin = require('handlebars-webpack-plugin')

module.exports = {
	plugins: [
		new HandlebarsPlugin({
			entry: path.join(process.cwd(), 'src', '*.hbs'),
			output: path.join(process.cwd(), 'dist', '[name].html'),
			data: require('./src/data/rw.json'),
		}),
	],
}
