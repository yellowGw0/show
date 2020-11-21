import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import '@node_/view-design/dist/styles/iview.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
