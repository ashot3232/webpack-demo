const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;



const jsRegex = /\.js$/;
const sassRegex = /\.(scss|sass)$/;
const imageRegex = /\.(png|jpe?g|gif)$/;

module.exports.loadSass = () => {
    const plugin = new MiniCssExtractPlugin();

    return {
        module: {
            rules: [
                {
                    test: sassRegex,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [plugin]
    }
};

module.exports.loadJs = () => {
    return {
        module: {
            rules: [
                {
                    test: jsRegex,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
};

module.exports.loadFile = () => {
    return {
        module: {
            rules: [
                {
                    test: imageRegex,
                    use: 'file-loader'
                }
            ]
        }
    }
};

exports.clean = path => ({
    plugins: [new CleanWebpackPlugin()],
});

exports.minifyJavaScript = () => ({
    optimization: {
        minimizer: [new TerserPlugin({ sourceMap: true })],
    },
});

exports.prevalJavaScript = () => ({
    plugins: [
        new PrepackWebpackPlugin({ test: /\.js($\|\?)/i })
    ]
});