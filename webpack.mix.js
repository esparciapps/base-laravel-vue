const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');


mix.js('resources/assets/js/app.js', 'public/js');
mix.less('resources/assets/less/app.less', 'public/css')
mix.options({
    postCss: [
        tailwindcss('./tailwind.js'),
    ]
});

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
    },
    output: {
        chunkFilename: 'js/[id].js',
    }
};

mix.webpackConfig(config);
