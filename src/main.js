/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import store from './store'
// import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)


// app.use(axios)
app.use(store)
app.use(VueAxios, axios)


// app.use(router)
registerPlugins(app)
// app.use(router)



app.mount('#app')
