import { createApp } from 'vue'
import './style.css'
import './assets/main.css'
import App from './App.vue'
import router from './Router/router.js'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
