const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { join, resolve } = require('path');
const { glob } = require('glob');

const mainCfg = {
  mode: 'none',
  target: 'electron-main',
  node: {
    __dirname: true,
    __filename: false,
  },
  entry: {
    index: "./src/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '../build/Debug/iconv.node$': resolve(
        __dirname,
        'node_modules/iconv/build/Release/iconv.node'
      ),
    },
    extensions: ['.ts', '.js', '.json'],
  },  
  //plugins: [new CleanPlugin()]
};

const windows = glob.sync("./src/windows/*/renderer.tsx");
const entries = Object.fromEntries(windows.map(w => [
  w.replace('.tsx', '').replace('src/', '').replace('/renderer', ''),
  w
]));
console.log(entries);

const rendererCfg = {
  mode: 'none',
  target: 'electron-renderer',
  entry: entries,
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.node'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: join(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: 'static'
      }]
    })
  ]
}

module.exports = [mainCfg, rendererCfg];