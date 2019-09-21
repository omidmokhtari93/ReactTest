module.exports = {
    mode: 'development',
    entry: ['./src/main.js' , './src/assets/scss/styles.scss']
    , output: {
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
    , watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.scss$/
                , exclude: /node_modules/
                , loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
