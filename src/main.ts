import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import { globalRegister } from './global'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
