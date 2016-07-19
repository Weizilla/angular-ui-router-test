var path = require("path");
var webpack = require("webpack");
var entry = path.resolve(__dirname, "src", "main.js");
var output = path.resolve(__dirname, "build");

module.exports = {
    entry: entry,
    output: {
        path: output,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, "src"),
                exclude: /node_modules/,
                loader: "babel",
                query: { presets: ["es2015"] }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {test: /\.html$/, loader: "file?name=[name].[ext]"},
            // font-awesome
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        // ignore locales for moment
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
    ]
};
