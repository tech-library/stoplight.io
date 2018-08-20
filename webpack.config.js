const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'dist/assets/media'),
    open: false,
    port: 8000,
    stats: 'normal',
  },
  devtool: 'inline-source-map',
  entry: {
    app: './app.js',
    about: ['./pages/about/about.js', './assets/scss/about.scss'],
    caseStudy: ['./pages/case-study/case-study.js', './assets/scss/case-study.scss'],
    indCaseStudy: ['./pages/individual-case-study/individual-case-study.js', './assets/scss/individual-case-study.scss'],
    productPage: ['./pages/product-page/product-page.js', './assets/scss/product-page.scss'],
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Let's the loader know which file format it’s going to work on
        include: /src/, // Let's the loader know which directory it should work into
        exclude: /node_modules/, // Let's the loader know which directory should it avoid while parsing
        // Let's the loader know which specific loader it’s using with use.loader and what’s
        // it’s configuration options with use.options
        use: {
          loader: 'eslint-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/',
              publicPath: './assets/media/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    filename: './assets/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../src/pages/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: '../src/pages/about/about.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'case-study.html',
      template: '../src/pages/case-study/case-study.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'individual-case-study.html',
      template: '../src/pages/individual-case-study/individual-case-study.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'product-page.html',
      template: '../src/pages/product-page/product-page.html',
    }),
  ],
};

module.exports = config;
