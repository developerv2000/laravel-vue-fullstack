import { defineConfig } from 'vite'; // Import Vite's configuration function
import laravel from 'laravel-vite-plugin'; // Import Laravel Vite plugin for handling assets
import vue from '@vitejs/plugin-vue'; // Import Vue plugin for Vite
import vuetify from 'vite-plugin-vuetify'; // Import Vuetify plugin for Vite (for Material UI components)
import { fileURLToPath } from 'url'; // Utility to resolve file paths

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js', // Entry point for JavaScript (main frontend file)
            ssr: 'resources/js/ssr.js', // Server-side rendering entry file (for SSR support)
            refresh: true, // Enables automatic page reloads when files change
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null, // Prevents modifying asset URLs
                    includeAbsolute: false, // Avoids transforming absolute URLs
                },
            },
        }),
        vuetify(), // Enables Vuetify support for Vue components
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)), // Creates '@' alias for easier imports
        },
    },
    ssr: {
        noExternal: ['vuetify'], // Ensures Vuetify is not treated as an external dependency in SSR mode
    },
    optimizeDeps: {
        include: ['vuetify'], // Pre-bundles Vuetify for better performance
    }
});
