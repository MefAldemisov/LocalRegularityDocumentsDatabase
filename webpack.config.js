var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js') // плагин для загрузки кода Vue

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/static/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}