import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {registerNodes} from '@/components/IssueProgressChart/config'

registerNodes()

createApp(App).use(ElementPlus).mount('#app')
