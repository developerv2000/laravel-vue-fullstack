<h2>Laravel fullstack framework using Vue + Vuetify + Inertia + Inertia SSR + Vite. Tested on Laravel v12</h2>

<h3>Installation steps</h3>

<p>Install Laravel:</p>
<code>composer create-project laravel/laravel fullstack</code>

<p></p>
<p>Install Laravel Breeze:</p>
<code>composer require laravel/breeze --dev</code>
<code>php artisan breeze:install</code>
<p></p>
<p>Select Vue with Inertia stack!</p>
<p>Select Inertia SSR as optinal feature!</p>

<p></p>
<p>Install Vuetify and Material desingn icons (@mdi/js for perfomance):</p>
<code>npm install vuetify</code>
<code>npm install @mdi/js</code>

<p></p>
<p>Install vite-plugin-vuetify</p>
<code>npm install vite-plugin-vuetify</code>

<p></p>
<p>Update <strong>vite.config.js</strong>, <strong>resources/app.js</strong> and <strong>resources/ssr.js</strong> files to properly handle Vuetify and SSR.</p>

<h3>Development</h3>

<p>Install packages and run development mode:</p>
<code>npm install</code>
<code>npm run dev</code>

<p></p>
<p>Start laravel server:</p>
<code>php artisan serve</code>

<h3>Production</h3>

<p>Install packages and build assets:</p>
<code>npm install</code>
<code>npm run build</code>

<p></p>
<p>Run Inertia server in the background:</p>
<code>php artisan inertia:start-ssr</code>
