const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  return {
    // 为了更好的看到打包后的代码，统一设置 mode 为开发模式
    mode: 'development',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      // 指定生产模式下采用 systemjs 的模块化规范
      libraryTarget: env.production ? 'system' : '',
    },
    module: {
      // 使用 babel-loader 转换 js 文件
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
      // 生产环境下不生成 index.html
      !env.production &&
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
    ].filter(Boolean),
    // 生产环境下不打包 react、react-dom
    externals: env.production ? ['react', 'react-dom'] : [],
  };
};

// 将子应用打包成类库，在主应用中加载这个库 （systemjs，这是一个模块规范）
// system 模块规范，umd、esm、commonjs、amd、cmd
