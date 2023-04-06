import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// TODO 按需
import 'element-plus/theme-chalk/src/base.scss'

const app = createApp(App)

app.use(createPinia())
// app.use(ElementPlus)

app.mount('#app')
