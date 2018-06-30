const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ng-paint.server.js'
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },

  target: 'node',
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        options: {
          configFile: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    ]
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 300
  }
}
