import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@/styles/index.scss';

import '@/styles/index.scss';

createApp(App).use(router)
  .use(vuetify)
  .use(router)
  .mount('#app')
