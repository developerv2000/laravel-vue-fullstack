<h2>Laravel fullstack framework using Vue + Vuetify + Inertia + Inertia SSR + Vite. Tested on Laravel v12</h2>

<h3>Installation steps</h3>

<p>Install Laravel:</p>
<code>composer create-project laravel/laravel fullstack</code>

<p>Install Laravel Breeze:</p>
<code>composer require laravel/breeze --dev</code>
<code>php artisan breeze:install</code>
<p>Select Vue with Inertia stack!</p>
<p>Select Inertia SSR as optinal feature!</p>

<p>Install Vuetify and Material desingn icons:</p>
<code>npm install vuetify</code>
<code>npm install @mdi/font</code>

<p>Install vite-plugin-vuetify</p>
<code>npm install vite-plugin-vuetify</code>

<p>Update <strong>vite.config.js</strong>, <strong>resources/app.js</strong> and <strong>resources/ssr.js</strong> files to properly handle Vuetify and SSR.</p>

<br><br>

<h3>Development</h3>

<p>Install packages and run development mode:</p>
<code>npm install</code>
<code>npm run dev</code>

<p>Start laravel server:</p>
<code>php artisan serve</code>

<br><br><br>

<h3>Production</h3>

<p>Install packages and build assets:</p>
<code>npm ci --production</code>
<code>npm run build</code>

<p>Run Inertia server in the background:</p>
<code>php artisan inertia:start-ssr</code>
