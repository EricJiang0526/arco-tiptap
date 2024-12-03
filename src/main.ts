import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ArcoTiptapPlugin from './lib'
import SvgIcon from './lib/components/Basics/SvgIcon.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(router)
app.use(ArcoTiptapPlugin)
app.component('SvgIcon', SvgIcon)

app.mount('#app')
