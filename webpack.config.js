module.exports = {
    context: __dirname + '/src',
    entry: {
        js: './index.jsx'
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};
