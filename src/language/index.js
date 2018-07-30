import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCNLocale from './zh-CN'
import zhTWLocale from './zh-TW'
import enUSLocale from './en-US'
import jsJPLocale from './ja-JP'
import koKRLocale from './ko-KR'

Vue.use(VueI18n)

const messages = {
  zhCN: {
    ...zhCNLocale,
  },
  zhTW: {
    ...zhTWLocale,
  },
  enUS: {
    ...enUSLocale,
  },
  jsJP: {
    ...jsJPLocale,
  },
  koKR: {
    ...koKRLocale,
  }

}

const i18n = new VueI18n({
  locale: 'zhTW', // set locale
  messages
})


export default i18n
