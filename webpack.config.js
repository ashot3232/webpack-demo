const path = require('path');

const cssRegex = /\.css$/;
const jsRegex = /\.js$/;
const sassRegex = /\.(scss|sass)$/;


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: sassRegex, use: ['css-loader', 'sass-loader'] }
        ]
    },
    mode: 'none'
};
