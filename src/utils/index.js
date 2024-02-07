/**
 * @file 国际化入口，提供语言相关的常用方法
 */
/**
 * 语言标识
 * en-us 英语
 * zh-tw 繁体
 * vi-vn 越南 (暂无)
 * es-es 西班牙语
 * in-id 印尼
 * th-th 泰国语 (暂无)
 * ja-jp 日语
 * */

import { createI18n } from 'vue-i18n'
import { locales } from './site'
import cookie from './cookie'
import enUs from '@/locales/en-us'
import zhCn from '@/locales/zh-cn'
import koKr from '@/locales/ko-kr'
import frFr from '@/locales/fr-fr'
import jaJp from '@/locales/ja-jp'

/**
 * Cookie 中语言标识
 *
 * @type {string}
 */
const COOKIE_LANG_KEY = 'common:lang'

export const t = (key) => key

/**
 * 国际化实例
 *
 */
const i18n = createI18n({
  silentTranslationWarn: true,
  messages: {
    'zh-cn': zhCn,
    'en-us': enUs,
    'ko-kr': koKr,
    'fr-fr': frFr,
    'ja-jp': jaJp
  }
})

/**
 * 已经加载的语言
 *
 * @type {Array}
 */
i18n.loadedLanguages = []

/**
 * 获取浏览器支持语言.
 *
 * @return {string|undefined}
 */
const getBrowserLanguage = () => {
  const language = navigator.appName === 'Netscape' ? navigator.language : navigator.browserLanguage
  const index = locales.findIndex((locale) => language.indexOf(locale.split('-')[0]) > -1)

  return index > -1 ? locales[index] : null
}

const getCookieLanguage = () => cookie.get(COOKIE_LANG_KEY)

/**
 * 判断语言是否支持.
 *
 * @param {any} locale - 语言.
 * @return {boolean}
 */
const isSupport = (locale) => locale && locales.includes(locale)

/**
 * 替换链接中的语言标识
 *
 * @description
 * 1. 会自动替换错误的 //
 * 2. 根据当前的语言，自动处理前缀
 * 3. 如果为单语言，将自动删除 lang 前缀
 *
 * @param  {string} path - 路径链接.
 * @param  {string} [lang=i18n.locale] - 追加语言，默认为当前语言
 * @return {string}
 *
 * @example
 *  1. 默认追加当前语言
 *      replace('/login') => /zh-cn/login
 *
 *  2. 替换当前语言
 *      replace('/en-us/login') => /zh-cn/login
 *
 *  3. 替换参数语言
 *      replace('/en-us/login', 'zh') => /zh/login
 *  4. 自动修改链接中的 /
 *      replace('//zh-cn///login') => /zh-cn/login
 */
const replace = (path = '', lang = i18n.global.locale) => {
  const paths = path
    .replace(/^[\\/]+/, '') // 过滤开头的 / ，用来做路径分隔。过滤转义符，防止外链接钓鱼
    .split(/\/+/) // 以 / 分隔来取 lang

  debugger
  // 如果一级是语言，则删除
  if (isSupport(paths[0])) {
    paths.splice(0, 1)
  }
  // console.log(lang, i18n, path);
  // 处理多语言前缀
  return lang ? `${paths.join('/')}` : `/${paths.join('/')}`
}

/**
 * 查找修正的语言
 *
 * @param {string} lang 目标语言
 * @return {(string|null)} 修正之后的语言
 */
const find = (lang = '') => {
  let result = ''

  locales.some((item) => {
    // 如果目标完全一致
    if (item === lang) {
      result = lang
      return true
      // 如果大小写有问题，则修正
    }
    if (item.toUpperCase() === lang.toUpperCase()) {
      result = item
      return true
    }
    return false
  })

  return result
}

/**
 * 获取完整路径
 *
 * @param {string} [locale=i18n.locale] 目录语言
 * @return {string}
 */
const getFullPath = (locale = i18n.locale) => {
  const url = `${window.location.pathname}${window.location.search}${window.location.hash}`
  return replace(url, locale)
}

/**
 * 异步加载语言包
 *
 * @param {string} locale 目录语言
 * @param lang
 * @return {Promise}
 */
const setAsyncLocale = (lang = '') => {
  // 优先设置语言包，让其他地方可以使用
  i18n.global.locale = lang
  // 设置 Cookie
  cookie.set(COOKIE_LANG_KEY, lang)
  return Promise.resolve()
}

/**
 * 重定向到语言链接
 *
 * @param {string} locale 目标语言
 */
const redirectTo = (locale) => {
  // 设置 Cookie
  cookie.set(COOKIE_LANG_KEY, locale)

  // 跳转链接
  window.location.href = getFullPath(locale)
}

/**
 * 设置语言
 *
 * @param {Object} params 配置参数
 * @param {string} params.locale 目标语言
 * @param {boolean} [params.redirect=true] 是否跳转
 *
 * @example
 *  1. 直接设置语言，默认链接自动跳转
 *  this.$i18n.setLocale({ locale: 'zh-cn' });
 *  2. 设置不跳转链接链接
 *  this.$i18n.setLocale({
 *      locale: 'zh-cn',
 *      redirect: false,
 *  });
 */
const setLocale = ({ locale = '', redirect = true } = {}) => {
  debugger
  // 如果目标语言不支持，则忽略
  if (!isSupport(locale)) {
    return
  }

  if (redirect) {
    redirectTo(locale)
  } else {
    // 动态更新链接
    window.history.pushState(null, '', getFullPath(locale))

    setAsyncLocale(locale)
  }
}

export default i18n

export { i18n, isSupport, setLocale, setAsyncLocale, getCookieLanguage, getBrowserLanguage, replace, find }
