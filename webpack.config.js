const { clear } = require('console');
const path = require('path'); // Подключаем стандартный модуль path из Nodejs к конфигу

module.exports = {
  mode: 'development', // или 'production'
  entry: path.resolve(__dirname, 'src', 'index.js'), // Путь к файлу-входу или entry: './src/index.js', если не используется path. Entry-point может быть несколько
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
    filename: `[name].[contenthash].js`, // Имя выходного файла - динамичное или filename: 'main.js', Имя выходного файла - статичное
    clean: true, // Очищать папку dist перед каждой сборкой
  }, // Указываем, куда и как собирать проект
};
