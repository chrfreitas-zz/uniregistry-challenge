const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/js/index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:  'eslint-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'postcss-loader' ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({template: './views/index.html'})
    ]
};

module.exports = config;
