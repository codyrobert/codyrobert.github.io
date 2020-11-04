const path = require('path');

module.exports = {

    title: 'Cody Robert Baker',

    head: [
        ['script', {}, 'document.documentElement.classList.add(\'js\');'],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' }],
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-6PVXQ9PJ6J' }],
        ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-6PVXQ9PJ6J');`],
    ],

    base: '/',

    dest: 'docs',

    evergreen: true,

    configureWebpack: {
        module: {
            rules: [{
                test: /\.scss$/,
                use: [{
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'),
                        sassOptions: {
                            importer: require('node-sass-glob-importer')(),
                            precision: 10,
                        },
                    },
                }],
            }],
        },
        resolve: {
            alias: {
                '@public': path.resolve('docs/.vuepress/public'),
            },
        },
    },

    chainWebpack: ( config, isSever ) => {

        config.module.rule('svg')
            .use('file-loader')
                .loader('vue-svg-loader')
                .options({
                    svgo: {
                        plugins: [
                            { mergePaths: false },
                            { removeViewBox: false },
                        ],
                    },
                })

    },
}
