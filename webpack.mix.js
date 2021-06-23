let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'js/app.js')
    .postCss('resources/assets/css/app.css', 'css/app.css')

mix.options({
    postCss: [
        require("postcss-import"),
        require('postcss-nested'),
        require('autoprefixer'),
        require('tailwindcss'),
    ]
});

/*
 |--------------------------------------------------------------------------
 | DO NOT EDIT BELOW
 |--------------------------------------------------------------------------
 */
mix.setPublicPath('assets');
mix.setResourceRoot('./');
