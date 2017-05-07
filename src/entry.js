import Vue from 'vue'
import './common/css/font.css'
import './common/css/icon.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
    primary: 'red',
    accent: 'teal',
    warn: 'orange',
    background: 'white'
  },
  white: {
    primary: 'white'
  }
})

import App from './App'
import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
  router,
  store
})
