import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SwiperCore, {Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Pagination])

createApp(App).use(store).use(router).mount('#app')
