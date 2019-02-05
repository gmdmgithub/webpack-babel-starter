const path = require('path'); //it's a core pack - no need to npm i

/**
 * plugin will generate the HTML file with the emitted output bundle as a script tag
 */
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //entry point - index.js is a default file
    entry: {
        app: './src/app.js'
    },
    //output location and file name - in this case dist (often bundle)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //how loaders works
    module: {
        rules: [{
            //regex for js files
            test: /\.js?$/,
            //excluding default module or libraries from building ie nome_modules
            exclude: /node_modules/,
            //usage of babal loader
            use: [{
                loader: 'babel-loader',
            }],
        }]
    }
    // ,
    // //plugins - how are used
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './public/index.html',
    //         filename: './index.html'
    //     })
    // ]

}