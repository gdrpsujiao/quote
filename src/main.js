import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@assets/css/common.scss'
import '@assets/css/reset-element.scss'   // 重寫element-ui組件樣式
import 'element-ui/lib/theme-chalk/index.css'

import VInput from '@/components/control/v-input.vue'
import VRadioGroup from '@/components/control/v-radio-group'
Vue.component('v-input', VInput)
Vue.component('v-radio-group', VRadioGroup)

import i18n from '@jslib/i18n'
Vue.use(i18n)

Vue.config.productionTip = false

import {
  Button,
  Input,
  RadioGroup,
  Radio
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
