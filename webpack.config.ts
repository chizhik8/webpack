// before npm install --save-dev typescript ts-node @types/node @types/webpack, npm install --save-dev @types/webpack-dev-server
// const path = require('path'); // Подключаем стандартный модуль path из Nodejs к конфигу
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // Подключаем плагин для работы с HTML. Плагин устанавливается через npm install --save-dev html-webpack-plugin. The html-webpack-plugin generates an HTML file for your application and automatically injects all your generated bundles into this file.
// const webpack = require('webpack'); //to access built-in plugins
// after
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development', // 'production' or 'development'
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // Путь к файлу-входу или entry: './src/index.js', если не используется path. Entry-point может быть несколько
    output: {
      path: path.resolve(__dirname, 'build'), // Путь к выходной директории
      filename: `[name].[contenthash].js`, // Имя выходного файла - динамичное или filename: 'main.js', Имя выходного файла - статичное
      clean: true, // Очищать папку dist перед каждой сборкой
    }, // Указываем, куда и как собирать проект
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      isDev && new webpack.ProgressPlugin(), // to show progress of build. The ProgressPlugin provides a way to track the progress of compilation.
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }), // to extract css into separate files. It creates a CSS file per JS file which contains CSS.
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        // {
        //   test: /\.css$/i,
        //   use: ["style-loader", "css-loader"],
        // },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && {
      open: true,
      port: env.port ?? 3030,
    },
    // optimization: {
    //   runtimeChunk: 'single',
    // },
  }
  return config;
};

