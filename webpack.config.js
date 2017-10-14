var debug = process.env.NODE_ENV !== "production";

var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        "client": "./src/client.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modulues)/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env", "es2015", "es2015-ie"],
                    plugins: [
                        "react-html-attrs",
                        "transform-class-properties",
                        "transform-decorators-legacy",
                        "transform-object-rest-spread",
                        "transform-react-jsx"
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.txt$/,
                loader: "raw-loader"
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "[name].min.js",
        publicPath: "/"
    },
    resolve: {
        modules: [ __dirname + "/src", "node_modules" ]
    },
    devServer: {
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
