import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './plugins/vuetify'
import Routes from './router'
import store from './store'


Vue.use(VueRouter)
Vue.config.productionTip = false

// Router management
const router = new VueRouter({
  mode: 'history',
  routes: Routes
})


new Vue({
  vuetify,
  store,
  router: router,
  render: h => h(App),
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}).$mount('#app')
