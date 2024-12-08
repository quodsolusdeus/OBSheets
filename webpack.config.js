const path = require('path');

module.exports = {
  mode: 'development', // Add this line. Use 'production' for final builds.
  entry: './src/character-sheet.ts',
  output: {
    filename: 'character-sheet.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
