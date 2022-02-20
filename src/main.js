import { createApp } from 'vue'
import App from './App.vue'
import magnify from "vue-material-design-icons/magnify.vue"

createApp(App)
.component('magnify-icon', magnify)
.mount('#app')
