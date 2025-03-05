import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath } from 'url';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vuetify({
            // Vuetify-specific options
            // styles: {
            //     configFile: 'resources/css/vuetify.scss', // Define custom Vuetify styles if needed
            // },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
        },
    },
    ssr: {
        noExternal: ['vuetify'], // Ensure Vuetify is handled as an external dependency during SSR
    },
    optimizeDeps: {
        include: ['vuetify'], // Ensure Vuetify is pre-bundled in development
    },
    css: {
        preprocessorOptions: {
            // No need for custom `additionalData`, let Vuetify handle its styles automatically
            scss: {
                additionalData: '@import "~vuetify/lib/styles/main.sass";',
            },
        },
    },
});
