import 'vuetify/styles'
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

import { createVuetify } from 'vuetify/lib/framework.mjs';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { ru } from 'vuetify/locale';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const vuetify = createVuetify({
    locale: {
        locale: 'ru',
        fallback: 'en',
        messages: { ru },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
    ssr: true,
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(vuetify)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
