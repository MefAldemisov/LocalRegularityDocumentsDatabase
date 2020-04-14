var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')

module.exports = {
	entry: path.resolve(__dirname, 'src') + '/main.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: './dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}, {
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		},
	},
	performance: {
		hints: false
	}
}
