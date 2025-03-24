
// @ts-nocheck


export const localeCodes =  [
  "en-us",
  "id-idn",
  "vn-vie",
  "ko-kr",
  "zh-hk",
  "de-de",
  "ja-jpn"
]

export const localeLoaders = {
  "en-us": [{ key: "../src/locales/en-us.json", load: () => import("../src/locales/en-us.json" /* webpackChunkName: "locale__Users_hzguy_Desktop_xulong_res_src_locales_en_us_json" */), cache: true }],
  "id-idn": [{ key: "../src/locales/id-idn.json", load: () => import("../src/locales/id-idn.json" /* webpackChunkName: "locale__Users_hzguy_Desktop_xulong_res_src_locales_id_idn_json" */), cache: true }],
  "vn-vie": [{ key: "../src/locales/vn-vie.json", load: () => import("../src/locales/vn-vie.json" /* webpackChunkName: "locale__Users_hzguy_Desktop_xulong_res_src_locales_vn_vie_json" */), cache: true }],
  "ko-kr": [{ key: "../src/locales/ko-kr.json", load: () => import("../src/locales/ko-kr.json" /* webpackChunkName: "locale__Users_hzguy_Desktop_xulong_res_src_locales_ko_kr_json" */), cache: true }],
  "zh-hk": [{ key: "../src/locales/zh-hk.json", load: () => import("../src/locales/zh-hk.json" /* webpackChunkName: "locale__Users_hzguy_Desktop_xulong_res_src_locales_zh_hk_json" */), cache: true }],
  "de-de": [{ key: "../src/locales/de-de.json", load: () => import("../src/locales/de-de.json" /* webpackChunkName: "locale__Users_hzguy_Desktop_xulong_res_src_locales_de_de_json" */), cache: true }],
  "ja-jpn": [{ key: "../src/locales/ja-jpn.json", load: () => import("../src/locales/ja-jpn.json" /* webpackChunkName: "locale__Users_hzguy_Desktop_xulong_res_src_locales_ja_jpn_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "name": "English",
      "code": "en-us",
      "label": "English",
      "value": "en-us",
      "calendar_key": "en",
      "ai_key": "en-US",
      "flag": "Britain",
      "files": [
        "/Users/hzguy/Desktop/xulong/res/src/locales/en-us.json"
      ]
    },
    {
      "name": "Bahasa Indonesia",
      "code": "id-idn",
      "label": "Bahasa Indonesia",
      "value": "id-idn",
      "calendar_key": "en",
      "ai_key": "id-ID",
      "flag": "Indonesia",
      "files": [
        "/Users/hzguy/Desktop/xulong/res/src/locales/id-idn.json"
      ]
    },
    {
      "name": "Tiếng Việt",
      "code": "vn-vie",
      "label": "Tiếng Việt",
      "value": "vn-vie",
      "calendar_key": "en",
      "ai_key": "vi-VN",
      "flag": "Vietnam",
      "files": [
        "/Users/hzguy/Desktop/xulong/res/src/locales/vn-vie.json"
      ]
    },
    {
      "name": "한국어",
      "code": "ko-kr",
      "label": "한국어",
      "value": "ko-kr",
      "calendar_key": "en",
      "ai_key": "ko-KR",
      "flag": "Korea",
      "files": [
        "/Users/hzguy/Desktop/xulong/res/src/locales/ko-kr.json"
      ]
    },
    {
      "name": "中文繁體",
      "code": "zh-hk",
      "label": "中文繁體",
      "value": "zh-hk",
      "calendar_key": "zh",
      "ai_key": "zh-HK",
      "flag": "HongKong",
      "files": [
        "/Users/hzguy/Desktop/xulong/res/src/locales/zh-hk.json"
      ]
    },
    {
      "name": "Deutsch",
      "code": "de-de",
      "label": "Deutsch",
      "value": "de-de",
      "calendar_key": "en",
      "ai_key": "en-US",
      "flag": "Germany",
      "files": [
        "/Users/hzguy/Desktop/xulong/res/src/locales/de-de.json"
      ]
    },
    {
      "name": "にほんご",
      "code": "ja-jpn",
      "label": "にほんご",
      "value": "ja-jpn",
      "calendar_key": "ja",
      "ai_key": "en-US",
      "flag": "Japan",
      "files": [
        "/Users/hzguy/Desktop/xulong/res/src/locales/ja-jpn.json"
      ]
    }
  ],
  "defaultLocale": "en-us",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "locale",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {
    "apple-touch-icon.png": false,
    "favicon.ico": false,
    "pwa/": false
  },
  "skipSettingLocaleOnNavigate": true,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "parsePages": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "name": "English",
    "code": "en-us",
    "label": "English",
    "value": "en-us",
    "calendar_key": "en",
    "ai_key": "en-US",
    "flag": "Britain",
    "files": [
      {
        "path": "/Users/hzguy/Desktop/xulong/res/src/locales/en-us.json"
      }
    ]
  },
  {
    "name": "Bahasa Indonesia",
    "code": "id-idn",
    "label": "Bahasa Indonesia",
    "value": "id-idn",
    "calendar_key": "en",
    "ai_key": "id-ID",
    "flag": "Indonesia",
    "files": [
      {
        "path": "/Users/hzguy/Desktop/xulong/res/src/locales/id-idn.json"
      }
    ]
  },
  {
    "name": "Tiếng Việt",
    "code": "vn-vie",
    "label": "Tiếng Việt",
    "value": "vn-vie",
    "calendar_key": "en",
    "ai_key": "vi-VN",
    "flag": "Vietnam",
    "files": [
      {
        "path": "/Users/hzguy/Desktop/xulong/res/src/locales/vn-vie.json"
      }
    ]
  },
  {
    "name": "한국어",
    "code": "ko-kr",
    "label": "한국어",
    "value": "ko-kr",
    "calendar_key": "en",
    "ai_key": "ko-KR",
    "flag": "Korea",
    "files": [
      {
        "path": "/Users/hzguy/Desktop/xulong/res/src/locales/ko-kr.json"
      }
    ]
  },
  {
    "name": "中文繁體",
    "code": "zh-hk",
    "label": "中文繁體",
    "value": "zh-hk",
    "calendar_key": "zh",
    "ai_key": "zh-HK",
    "flag": "HongKong",
    "files": [
      {
        "path": "/Users/hzguy/Desktop/xulong/res/src/locales/zh-hk.json"
      }
    ]
  },
  {
    "name": "Deutsch",
    "code": "de-de",
    "label": "Deutsch",
    "value": "de-de",
    "calendar_key": "en",
    "ai_key": "en-US",
    "flag": "Germany",
    "files": [
      {
        "path": "/Users/hzguy/Desktop/xulong/res/src/locales/de-de.json"
      }
    ]
  },
  {
    "name": "にほんご",
    "code": "ja-jpn",
    "label": "にほんご",
    "value": "ja-jpn",
    "calendar_key": "ja",
    "ai_key": "en-US",
    "flag": "Japan",
    "files": [
      {
        "path": "/Users/hzguy/Desktop/xulong/res/src/locales/ja-jpn.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
