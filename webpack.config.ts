import webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/web.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.NODE_DEBUG': JSON.stringify('*'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.web.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

export default config;
