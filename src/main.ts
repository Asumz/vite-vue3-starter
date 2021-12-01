import { createApp } from 'vue';
import router from '@/router/index';
import { key, store } from '@/store';
import App from './App.vue';

const app = createApp(App);

app.use(router).use(store, key).mount('#app');
