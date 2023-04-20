import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import router from './router'

import './scss/app.scss';

const app = createApp(App)

app.use(AntD)
app.use(createPinia())
app.use(router)

app.mount('#app')
