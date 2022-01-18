import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap';
import './css/style.css';
import './css/style.scss';

createApp(App).use(store).use(router).mount('#app')