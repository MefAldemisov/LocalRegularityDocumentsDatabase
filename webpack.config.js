var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js') // плагин для загрузки кода Vue

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/static/js/main.js',
    output: {
        path: path.resolve(__dirname, './src/static/dev/'),
        publicPath: '/src/static/dev/',
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
}
