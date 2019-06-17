const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loadSass, loadJs, loadFile, clean, minifyJavaScript, prevalJavaScript } = require('./webpack.parts');
const DashboardPlugin = require('webpack-dashboard/plugin');




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
            }),
            new DashboardPlugin()
        ],
        devtool: 'cheap-source-map'
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
    loadFile(),
    clean(),
    minifyJavaScript(),
    prevalJavaScript()
]);



module.exports = mode => {
    if (mode === "production") {
        return merge(commonConfig, productionConfig, { mode });
    }

    return merge(commonConfig, developmentConfig, { mode });
};
