import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import { createVuetify } from 'vuetify/lib/framework.mjs';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { ru } from 'vuetify/locale';

// Define the app name, using an environment variable if available
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Configure Vuetify with localization and icons
const vuetify = createVuetify({
    locale: {
        locale: 'ru', // Default locale is Russian
        fallback: 'en', // If Russian translations are missing, fallback to English
        messages: { ru },
    },
    icons: {
        defaultSet: 'mdi', // Use Material Design Icons by default
        aliases,
        sets: { mdi },
    },
    ssr: true, // Enable Server-Side Rendering (SSR) support for Vuetify
});

// Create an Inertia.js SSR server
createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString, // Use Vue's server-side rendering engine
        title: (title) => `${title} - ${appName}`, // Set dynamic page titles

        // Resolve page components dynamically
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob('./Pages/**/*.vue'),
            ),

        setup({ App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin) // Register Inertia.js plugin
                .use(ZiggyVue, { // Register Ziggy for handling Laravel routes in Vue
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(vuetify); // Register Vuetify UI framework
        },
    }),
);
