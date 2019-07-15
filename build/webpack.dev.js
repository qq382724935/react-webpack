const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        open: true,
        contentBase: "../dist",
        compress: true,
        // hotOnly:true 
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
});