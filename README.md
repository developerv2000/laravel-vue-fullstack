<h2>Laravel fullstack framework using Vue + Vuetify + Inertia + Inertia SSR + Vite. Tested on Laravel v12</h2>

<h3>Installation steps</h3>

<h4>Install Laravel:</h4>
<code>composer create-project laravel/laravel fullstack</code>

<h3>Install Laravel Breeze:</h3>
<code>composer require laravel/breeze --dev</code>
<code>php artisan breeze:install</code>
<p>Select Vue with Inertia stack!</p>
<p>Select Inertia SSR as optinal feature!</p>

<h3>Install Vuetify and Material desingn icons:</h3>
<code>npm install vuetify</code>
<code>npm install @mdi/font</code>

<h3>Install vite-plugin-vuetify</h3>
<code>npm install vite-plugin-vuetify</code>

<h3>Update <strong>vite.config.js</strong>, <strong>resources/app.js</strong> and <strong>resources/ssr.js</strong> files to properly handle Vuetify and SSR.</h3>

<br><br><br>

<h2>Development</h2>

<h3>Install packages and run development mode:</h3>
<code>npm install</code>
<code>npm run dev</code>

<h3>Start laravel server:</h3>
<code>php artisan serve</code>

<br><br><br>

<h2>Production</h2>

<h3>Install packages and build assets:</h3>
<code>npm ci --production</code>
<code>npm run build</code>

<h3>Run Inertia server in the background:</h3>
<code>php artisan inertia:start-ssr</code>
