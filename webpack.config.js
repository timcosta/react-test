const webpack = require('webpack');
var config = {
    devtool: 'cheap-module-source-map',
    entry: './src/entry.js',

    output: {
        path:'./dist',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 7000,
        historyApiFallback: true,
        proxy: {
            '/api*': {
                target: 'http://localhost:8000'
            }
        }
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                presets: ['es2015', 'react']
                }
            }
        ],
        noParse: [
            /node_modules[\/]video\.js[\/]/
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}

module.exports = config;
