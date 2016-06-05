var path = require('path');
// var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        javascript: "./app/index.js",
        html: "./index.html",
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },

    // postcss: [
    //     autoprefixer({
    //         browsers: ['last 2 version']
    //     })
    // ],

    devtool: '#eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname,
            },
            // {
            //     // ASSET LOADER
            //     // Reference: https://github.com/webpack/file-loader
            //     // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
            //     // Rename the file using the asset hash
            //     // Pass along the updated reference to your code
            //     // You can add here any file extension you want to get copied to your output
            //     test: /\.(gif|svg|woff|woff2|ttf|eot)$/,
            //     loader: 'file'
            // },
            // {
            //     test: /\.(png|jpg|jpeg)$/,
            //     exclude: /node_modules/,
            //     loader: 'file?name=[name].[ext]'
            // },
            //
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.(css|scss)/,
                loaders: ['style', 'css', 'postcss', 'sass']
            }

        ],

    },
    devServer: {
        host: '0.0.0.0',
        port: 8080
    }
}