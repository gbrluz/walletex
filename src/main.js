import { createApp, h } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import router from './router'


// Assumes your root component is App.vue
// and placed in same folder as main.js

// Vue.use(Vuex);


const myApp = createApp({
	setup() {},
	render: () => h(App)
  })

myApp.use(Quasar).use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')