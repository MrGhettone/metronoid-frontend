import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa la configurazione

import './assets/main.css' // aggiungo lo stile css

const app = createApp(App)

app.use(router) // Collega il router
app.mount('#app')