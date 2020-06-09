var path = require('path');
var webpack = require('webpack')

// variables
const sourcePath = path.join(__dirname, 'src');
const outPath = path.join(__dirname, 'dist');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const webpackConfig = {
  context: sourcePath,
  entry: './index.tsx',
  output: {
    path: outPath,
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true
            }
          }
        ],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ],
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.BUILD_TIME': JSON.stringify(new Date().toLocaleString())
    }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      tsconfig: '../tsconfig.json',
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'app': path.resolve(__dirname, 'src/app/')
    }
  },
  devServer: {
    contentBase: outPath,
    port: 2345,
    hot: true,
    inline: true,
    quiet: false,
    stats: 'minimal'
  },
  devtool: "source-map",
  target: "web"
};

module.exports = webpackConfig
