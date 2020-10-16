import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { eventExtend } from './extends'

eventExtend(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
