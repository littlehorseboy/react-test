// HtmlWebpackPlugin, 將 bundle 好的 <script> 插入到 body, ${__dirname} 為 ES6 語法對應到 __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin');
debugger;
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  // 檔案起始點, 是陣列所以可以是多個檔案
  entry: [
    './app/index.js',
  ],
  // output 產出結果的相關參數
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    /* 在這邊是使用 babel-loader 將所有 .js 相關檔案轉譯成瀏覽器可以閱讀的 JavaScript。
      排除了 npm 安裝的套件位置 node_modules
      preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。
      若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
    */
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  devServer: {
    inline: true,
    port: 8088,
  },
  plugins: [HTMLWebpackPluginConfig],
};
