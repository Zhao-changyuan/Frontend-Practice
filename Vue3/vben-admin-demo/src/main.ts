import '/@/design/index.less';

// 注册windi
import 'virtual:windi.css';

// 注册 图标雪碧图
import 'virtual:svg-icons-register';

import { createApp } from 'vue';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  app.mount('#app', true);
}

void bootstrap();
