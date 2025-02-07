# Webpack
Webpack [https://webpack.js.org/]
Популярний модульний збирач (module bundler) для сучасних веб-додатків JavaScript. 
Дозволяє збирати всі ресурси (JavaScript, CSS, зображення, шрифти та інше) в оптимізовані файли для ефективного використання в браузері.

Його основна мета — полегшити розробку, управління залежностями та збільшити продуктивність веб-додатків.

# Основні концепції Webpack:

1.Entry (Вхідна точка) - Вхідний файл або файли, з яких починається збірка проєкту.  
    module.exports = {
    entry: './src/index.js',
    };

2.Output (Вихідні файли) - Визначає, куди Webpack зберігатиме зібрані файли
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }

3.Loaders (Завантажувачі) - Дозволяють обробляти файли різних форматів (CSS, зображення, JSX тощо)
    Наприклад:  
    - `babel-loader` для транспіляції сучасного JavaScript  
    - `css-loader` для імпорту CSS-файлів у JavaScript  

    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            },
        ],
    }

4.Plugins (Плагіни) - Розширюють можливості Webpack — оптимізація кодів, генерація HTML-файлів, видалення дублікатів тощо. 
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
        plugins: [
            new HtmlWebpackPlugin({
            template: './src/index.html',
            }),
        ],
    }

5.Mode (Режим роботи)
    Webpack має режими:  
    - `development` (зручний для розробки з source maps)  
    - `production` (мінімізація та оптимізація для релізу)  

    mode: 'development' // або 'production'

6.DevServer (Розробницький сервер) - Надає локальний сервер для гарячого оновлення (hot reloading) під час розробки.  
    devServer: {
        static: './dist',
        hot: true,
    },

# Коли і для чого використовувати Webpack:

1. **Розробка великих веб-додатків:** коли потрібно організувати масштабну систему з багатьма файлами.  
2. **Оптимізація продуктивності:** автоматичне зменшення розмірів файлів для швидкого завантаження.  
3. **Об'єднання файлів:** імпортування ресурсів (CSS, зображень, SVG тощо) як частини JavaScript.  
4. **Полегшення роботи з новими технологіями:** підтримка ES6, TypeScript, React, SASS тощо.  
5. **Підтримка гарячого оновлення:** швидке відображення змін під час розробки.  

### ✅ **Переваги Webpack:**  
- Потужна система плагінів і лоадерів  
- Підтримка модульної структури  
- Оптимізація ресурсів для продакшн-версії  
- Гаряче оновлення під час розробки  

### ❌ **Можливі недоліки:**  
- Складність налаштувань для новачків  
- Потрібен час на оптимізацію конфігурацій  

Якщо потрібно швидко почати розробку з мінімальними налаштуваннями, 
можна використовувати альтернативи, такі як **Vite**, **Parcel** або **Snowpack**, 
але для масштабних проєктів Webpack залишається надійним і гнучким вибором.

### Коли використовувати Webpack у React-проєкті?
 - Кастомні налаштування: якщо ти маєш нестандартні вимоги (наприклад, специфічна обробка медіафайлів або складні оптимізації).
 - Оптимізація продуктивності: автоматична мінімізація бандлів, розбиття на частини (code splitting).
 - Складна структура проєкту: коли багато залежностей, потрібно керувати різними середовищами (production/development).
 - Інтеграція специфічних плагінів та лоадерів: наприклад, для обробки TypeScript, SCSS, SVG тощо.

### ✅ Альтернатива Webpack для React:
 - Vite: легший та швидший збирач із вбудованою підтримкою React.
 - Parcel: мінімальне налаштування та автоматична оптимізація.
 - Create React App (CRA): стандартний швидкий спосіб створення React-проєктів із готовим Webpack. 
 CRA автоматично додає всі необхідні бібліотеки та конфігурації для сучасного React-додатка.

### CRA вже має отові налаштування:
 - Webpack: для збірки коду, оптимізації ресурсів
 - Babel: для підтримки JSX і сучасного JavaScript
 - ESLint: для перевірки якості коду
 - PostCSS: обробка стилів

    npx create-react-app my-app
    cd my-app
 - Основні команди CRA:
    npm start     # Запуск локального сервера
    npm run build # Збірка для продакшн-версії
    npm test      # Запуск тестів
    npm run eject # Витяг усіх конфігурацій для ручного налаштування
    ⚠️ Увага: команда npm run eject видаляє абстракцію CRA, дозволяючи редагувати Webpack і Babel вручну. Після цього скасувати eject неможливо.
    Кастомізація через Craco (безпечніше). Встанови Craco — інструмент для налаштування CRA без eject: npm install @craco/craco

 - Коли Craco краще ніж eject:
    Потрібно додати специфічні плагіни чи правила
    Хочеш кастомізувати Webpack без втрати простоти управління проєктом
    Не хочеш розгрібати складнощі після eject


### Webpack ПОЛНЫЙ КУРС от А до Я. Вся конфигурация, Микрофронтенд, Монорепозиторий, Module Federation[`https://youtu.be/acAH2_YT6bs?si=SfyK6Y4oxTHVRR4r`]

`npm init -y` используется для инициализации нового проекта Node.js с использованием npm (Node Package Manager). 
Автоматически создает файл `package.json` с настройками по умолчанию, пропуская все вопросы, которые обычно задаются при выполнении команды `npm init`.

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

# Installing React and TypeScript Types
`npm i react@18.2.0 react-dom@18.2.0`
`npm i -D @types/react@18.2.25 @types/react-dom@18.2.11`
replace .ts with .tsx

css-loader: `https://webpack.js.org/loaders/css-loader/#root`

style-loader: `https://webpack.js.org/loaders/style-loader/#root`

sass-loader: `https://webpack.js.org/loaders/sass-loader/#root`

MiniCssExtractPlugin: `https://webpack.js.org/plugins/mini-css-extract-plugin/#root`

