import Vue from 'vue'
import VueI18n from 'vue-i18n'

// element
import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-TW'

import zhLang from '@assets/lang/zh-tw'
import enLang from '@assets/lang/en-us'

// 多語言配置
const config = {
  'en-US': [enLocale, enLang],
  'zh-CN': [zhLocale, zhLang]
}

// 由於webpack打包後的文件作為閉包處理，取不到外部變量
window.Vue = Vue
// 根據本地緩存或瀏覽器默認語言進行多語言處理
let lang = localStorage.getItem('lang') || 'zh-CN'
// let lang = 'en-US' // 暫時默認英文
if (!lang) {
  lang = navigator.language || navigator.userLanguage
  localStorage.setItem('lang', lang)
}
Vue.prototype.$lang = lang
const i18n = new VueI18n({
  locale: lang,
  messages: Object.keys(config).reduce((result, item) => {
    result[item] = (langArr => {
      let obj = {}
      // eslint-disable-next-line
      langArr.forEach(item => obj = Object.assign(obj, item))
      return obj
    })(config[item])
    return result
  }, {})
})
ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n