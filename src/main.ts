import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 導入顏色系統樣式
import '@/styles/colors.css'

// 導入顏色系統並應用初始主題
import { getInitialTheme, applyTheme } from '@/theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 應用初始主題
applyTheme(getInitialTheme())

app.mount('#app')
