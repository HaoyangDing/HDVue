import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuetify from 'vuetify';
import router from './routing/AppRouter';

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
