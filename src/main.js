/* ------------- Vue ---------------*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
/* ------------- Vue ---------------*/

/* ------------- Loading ---------------*/
import ElementLoading from 'vue-element-loading';
Vue.component('loading', ElementLoading);
/* ------------- Loading ---------------*/

/* ------------- Style ---------------*/
import './assets/scss/style.scss';
/* ------------- Style ---------------*/
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
