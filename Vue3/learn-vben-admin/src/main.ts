
// Register windi
import 'virtual:windi.css';

import { createApp } from 'vue'
import App from './App.vue'



// Register icon sprite
import 'virtual:svg-icons-register';


async function bootstrap() {
  const app = createApp(App);

  app.mount('#app', true)
}

void bootstrap();
