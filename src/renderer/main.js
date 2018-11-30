import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
