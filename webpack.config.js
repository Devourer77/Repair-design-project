const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = function(){
    return {
        mode: 'development',
        entry: [
            './src/app.js'
        ],
        watch: true,
        watchOptions: {
            aggregateTimeout: 300, // Process all changes which happened in this time into one rebuild
            poll: 1000, // Check for changes every second,
            ignored: /node_modules/,
            // ignored: [
            //   '**/*.scss', '/node_modules/'
            // ]
        },
        devtool: 'source-maps',
        devServer: {
            contentBase: path.join(__dirname, 'src'),
            watchContentBase: true,
            hot: true,
            open: true,
            inline: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'repair-design-project',
                template: path.resolve('./src/index.html')
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        "css-loader",
                        "sass-loader",
                    ]
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(pdf|doc|docx|xls|xlsx|txt|csv|tsv)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: './files',
                                name: "[name].[ext]",
                            },
                        }
                    ]
                },
                {
                    test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: './assets/image',
                                name: "[name].[ext]",
                            },
                        },
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':src', ':href']
                        }
                    }
                },
                {
                    test: require.resolve('jquery'),
                    use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },
                        {
                            loader: 'expose-loader',
                            options: '$'
                        }
                    ]
                },
            ]
        }
    };
}