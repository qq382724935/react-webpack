const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../client/index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },

  resolve: {
    extensions: ['.js', '.jsx'], //后缀名自动补全
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', {
        loader: "postcss-loader",
        options: {
          plugins: [
            require("autoprefixer")
          ]
        }
      },],
    },
    {
      test: /\.less$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          },
        },
        // {
        //   loader: "postcss-loader",
        //   options: {
        //     plugins: [
        //       require("autoprefixer")
        //     ]
        //   }
        // },
      ]
    },
    {
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader" },
        {
          loader: "postcss-loader",
          options: {
            plugins: [
              require("autoprefixer")
            ]
          }
        },
      ]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000
      }
    },
    {
      test: /\.(woff|svg|eot|woff2|tff)$/,
      use: 'url-loader',
      exclude: /node_modules/
    }
    ]
  },
  stats: "errors-only"
};

