import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
// import { setupStore } from './store'

const app = createApp(App)
app.use(store)
// setupStore()
app.use(router)
app.use(ElementPlus)

app.mount('#app')
