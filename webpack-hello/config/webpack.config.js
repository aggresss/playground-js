const path = require('path');               
const base = path.join(__dirname, '..');    

module.exports={
    devtool: 'eval-source-map',
    entry: path.resolve(base,'app/main.js'),
    output:{
        path: path.resolve(base, 'public'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.resolve(base, 'public'),
        historyApiFallback: true,                   
        inline: true,                               //实时更新
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/preset-env","@babel/preset-react"],
                plugins: [require('@babel/plugin-proposal-object-rest-spread')]
              }
            }
          }
        ]
    }
};