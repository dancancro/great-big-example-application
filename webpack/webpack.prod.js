const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');
const ENV = 'prod';

module.exports = webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'source-map',
    output: {
        path: path.resolve('./target/www'),
        filename: '[hash].[name].bundle.js',
        chunkFilename: '[hash].[id].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin('[hash].styles.css'),
        new Visualizer({
            // Webpack statistics in target folder
            filename: '../stats.html'
        })
    ]
});
