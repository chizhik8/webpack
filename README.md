# Webpack
[https://webpack.js.org/` `https://webpack.js.org/concepts/]
Webpack — это мощный модульный сборщик для JavaScript приложений. Он берет модули с зависимостями и компилирует их в статические файлы, которые можно использовать в веб-приложениях.

Основные функции webpack включают:

1-Сборка модулей: webpack позволяет объединять различные модули (JavaScript, CSS, изображения и т.д.) в один или несколько бандлов.
2-Загрузка ресурсов: Используя загрузчики (loaders), webpack может обрабатывать файлы различных типов, таких как CSS, изображения, шрифты и тд
3-Плагины: Плагины расширяют функциональность webpack и позволяют выполнять такие задачи, как оптимизация бандлов, управление активами и многое другое.
4-Код сплиттинг: webpack поддерживает разделение кода, что позволяет загружать только необходимые части приложения, улучшая производительность.

команда `npm init -y` используется для инициализации нового проекта Node.js с использованием npm (Node Package Manager). Она автоматически создает файл `package.json` с настройками по умолчанию, пропуская все вопросы, которые обычно задаются при выполнении команды `npm init`.

создаем папку `src` с файлом `index.js`. Директория `src` используется для хранения исходного кода проекта, что помогает структурировать проект и отделить исходный код от других файлов, таких как конфигурационные файлы, тесты и документация.

`npm install webpack webpack-cli --save-dev`

в файле package.json в "scripts" добавляем `"build": "webpack"`, для вызова webpack, чтобы собрать bundle, после выполнения команды` npm run build`, webpack создает папку dist и файл main.js, содержащий весь скомпилированный код проекта. То что пояляется в результате сборки и называется bundle.

cоздаем файл webpack.config.js, где будут все настройки для webpack

# Environment Variables
To disambiguate in your webpack.config.js between development and production builds you may use environment variables. 
`https://webpack.js.org/guides/environment-variables/#root`
Может быть несколько способов, к примеру можно настроить Environment Variables с помощью скрипта: 
`"scripts": {
    "build:dev": "webpack --env mode=development",
    "build:prod": "webpack --env mode=production"
}`
To use the env variable, you must convert module.exports to a function in webpack.config.js

# Plugins
While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
`https://webpack.js.org/concepts/#plugins`

# Loaders
`https://webpack.js.org/concepts/loaders/`
Loaders (лоадеры) в webpack используются для обработки различных типов файлов, которые не являются JavaScript. Они позволяют webpack обрабатывать такие файлы, как CSS, изображения, шрифты и многое другое, и включать их в сборку.

# TypeScript
`https://webpack.js.org/guides/typescript/#root`
integrate TypeScript with webpack `npm install --save-dev typescript ts-loader`
создаем tsconfig.json файл с настройками для typescripts, в webpack.config.js добавляем module и resolve

# Webpack configuration in TypeScript
`https://webpack.js.org/configuration/configuration-languages/#typescript`

# DevServer
webpack-dev-server can be used to quickly develop an application
`https://webpack.js.org/configuration/dev-server/#root`
set port `npm start -- --env port=5000` or by default will be 3030 `npm start`
