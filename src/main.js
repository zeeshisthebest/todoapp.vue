import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './plugins/vuetify'
import Routes from './router'

// Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})


new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
