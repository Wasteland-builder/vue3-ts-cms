import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import emRequest from './service'

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).mount('#app')

emRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

emRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res)
  })
