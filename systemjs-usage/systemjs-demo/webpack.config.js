const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  return {
    mode: 'development',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: env.production ? 'system' : '',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      !env.production &&
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
    ].filter(Boolean),
    // 生产环境下不打包 react、react-dom
    externals: env.production ? ['react', 'react-dom'] : [],
  };
};
