let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

if (process.env.npm_lifecycle_event !== 'hot') {
    mix.version()
}

if (mix.inProduction()) {
    mix.extract([
        'vue',
        'axios',
        'vue-router'
    ]);
}

const config = {
    resolve: {
        alias: {
            '@': path.join(__dirname, './resources/assets/js')
        }
    }
};

mix.webpackConfig(config);
