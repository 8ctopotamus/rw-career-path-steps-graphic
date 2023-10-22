const path = require('path')
const HandlebarsPlugin require('handlbars-webpack-plugin')

module.exports = {
	entry: path.join(process.cwd(), 'src', '*.hbs'),
	output: path.join(process.cwd(), 'dist', '[name].html'),
	data: path.join(process.cwd(), 'src/data/rw.json'),
}
