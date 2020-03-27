const path = require('path')

const PATHS = {
  entry: path.resolve(__dirname, '../build'),
  src: path.resolve(__dirname, '../src'),
  public: path.resolve(__dirname, '../src/assets'),
  // envConfig: path.resolve(__dirname, `../src/config/development.ts`),
}

module.exports = {
  context: process.cwd(),
  entry: PATHS.src,

  output: {
    filename: '[name].js',
    path: PATHS.entry,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      config: `${PATHS.src}/config`,
    },
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: PATHS.public,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          publicPath: PATHS.public,
        },
      },
      // {
      //   test: require.resolve('../src/config/index.ts'), // /\config.*ts$/,
      //   use: [
      //     {
      //       loader: 'val-loader',
      //       options: {
      //         envConfig: require(PATHS.envConfig),
      //       },
      //     },
      //   ],
      // },
    ],
  },
}
