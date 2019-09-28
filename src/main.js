import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './router/router'

// import UI 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
