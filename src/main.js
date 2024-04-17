import { createApp, h } from 'vue'
import { Quasar } from 'quasar'
import routes from './router/router.js'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


// Assumes your root component is App.vue
// and placed in same folder as main.js

// Vue.use(Vuex);


const myApp = createApp({
	setup() {},
	render: () => h(App)
  })

myApp.use(Quasar).use(routes)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')