import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseCard from './components/Base/BaseCard.vue'

createApp(App).component('base-card',BaseCard)
.use(store).use(router).mount('#app')
