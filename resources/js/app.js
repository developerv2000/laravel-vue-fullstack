// Import main CSS and JS files
import '../css/app.css';
import './bootstrap';

// Import Inertia.js for handling frontend routing and state
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Import Vue core functions
import { createApp, h } from 'vue';

// Import ZiggyVue for handling named Laravel routes in Vue
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

// Import Vuetify for UI components and icons
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'; // Use Material Design Icons
import { ru } from 'vuetify/locale'; // Russian locale support

// Define the app name, using an environment variable if available
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Configure Vuetify with localization, icons, and SSR support
const vuetify = createVuetify({
    locale: {
        locale: 'ru', // Set default locale to Russian
        fallback: 'en', // Use English as fallback if Russian is unavailable
        messages: { ru }, // Provide locale messages
    },
    icons: {
        defaultSet: 'mdi', // Set default icon pack to Material Design Icons
        aliases, // Include icon aliases
        sets: { mdi }, // Define available icon sets
    },
    ssr: true, // Enable Server-Side Rendering support
});

// Create and configure the Inertia.js application
createInertiaApp({
    // Set the document title dynamically
    title: (title) => `${title} - ${appName}`,

    // Resolve the Vue components dynamically based on the route
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ),

    // Setup function to initialize the Vue app
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin) // Use Inertia plugin
            .use(ZiggyVue) // Enable Laravel route support in Vue
            .use(vuetify) // Register Vuetify UI components
            .mount(el); // Mount the app to the root element
    },

    // Configure the loading progress bar color
    progress: {
        color: '#4B5563', // Set progress bar color to gray
    },
});
