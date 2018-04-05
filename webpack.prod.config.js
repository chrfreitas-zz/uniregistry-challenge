const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: './src/js/index.js',
    },
    output: {
        path:__dirname + '/public',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, 'postcss-loader' ]
                })
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({ template: './views/index.html' }),
        new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }}),
        new Webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new ExtractTextPlugin('main.css')
    ]
}
