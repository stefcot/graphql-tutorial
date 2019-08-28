import Vue from 'vue';
import App from '@/components/App.vue';
import router from '@/plugins/router';
import store from '@/plugins/store';
import { createProvider } from '@/plugins/appolo';

import './css/_main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
