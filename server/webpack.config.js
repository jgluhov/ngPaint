const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  target: 'node',

  externals: [
    nodeExternals()
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    ]
  }
}
