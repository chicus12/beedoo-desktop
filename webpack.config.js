const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/window/index.js'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built',
    libraryTarget: 'commonjs2',
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: [
          'react-hot-loader',
          'babel-loader?presets[]=es2015,presets[]=babel-preset-react,presets[]=react&plugins[]=syntax-object-rest-spread,plugins[]=transform-object-rest-spread,plugins[]=transform-class-properties',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' },
      {
        test: /\.(jpg|jpeg|png)/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
        include: `${__dirname}/src/window/assets`,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js'],
  },
  target: 'electron-renderer',
  devtool: 'source-map',
}
