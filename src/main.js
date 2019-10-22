import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@assets/css/common.scss'
import '@assets/css/reset-element.scss'   // 重寫element-ui組件樣式
import 'element-ui/lib/theme-chalk/index.css'

import i18n from '@jslib/i18n'
Vue.use(i18n)

Vue.config.productionTip = false

import {
  Button
} from 'element-ui'

Vue.use(Button)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
