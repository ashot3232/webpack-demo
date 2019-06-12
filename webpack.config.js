const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loadSass, loadJs, loadFile } = require('./webpack.parts');




const commonConfig = merge([
    {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            })
        ]
    }
]);

const developmentConfig = merge([
    loadSass(),
    loadJs(),
    loadFile()
]);


const productionConfig = merge([
    loadSass(),
    loadJs(),
    loadFile()
]);



module.exports = mode => {
    if (mode === "production") {
        return merge(commonConfig, productionConfig, { mode });
    }

    return merge(commonConfig, developmentConfig, { mode });
};
