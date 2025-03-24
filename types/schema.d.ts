import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPersistedstate"]: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     */
    ["elementPlus"]: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-lodash`
     */
    ["lodash"]: typeof import("nuxt-lodash").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     */
    ["gtag"]: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vite-pwa/nuxt`
     */
    ["pwa"]: typeof import("@vite-pwa/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     */
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     */
    ["elementPlus"]?: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-lodash`
     */
    ["lodash"]?: typeof import("nuxt-lodash").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     */
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vite-pwa/nuxt`
     */
    ["pwa"]?: typeof import("@vite-pwa/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@element-plus/nuxt", Exclude<NuxtConfig["elementPlus"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-lodash", Exclude<NuxtConfig["lodash"], boolean>] | ["/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@vite-pwa/nuxt", Exclude<NuxtConfig["pwa"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/@pinia-plugin-persistedstate/nuxt
     */
    ["piniaPersistedstate"]: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     * @see https://www.npmjs.com/package/@element-plus/nuxt
     */
    ["elementPlus"]: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-lodash`
     * @see https://www.npmjs.com/package/nuxt-lodash
     */
    ["lodash"]: typeof import("nuxt-lodash").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     * @see https://www.npmjs.com/package/nuxt-gtag
     */
    ["gtag"]: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vite-pwa/nuxt`
     * @see https://www.npmjs.com/package/@vite-pwa/nuxt
     */
    ["pwa"]: typeof import("@vite-pwa/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia-plugin-persistedstate/nuxt`
     * @see https://www.npmjs.com/package/@pinia-plugin-persistedstate/nuxt
     */
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@element-plus/nuxt`
     * @see https://www.npmjs.com/package/@element-plus/nuxt
     */
    ["elementPlus"]?: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-lodash`
     * @see https://www.npmjs.com/package/nuxt-lodash
     */
    ["lodash"]?: typeof import("nuxt-lodash").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-gtag`
     * @see https://www.npmjs.com/package/nuxt-gtag
     */
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vite-pwa/nuxt`
     * @see https://www.npmjs.com/package/@vite-pwa/nuxt
     */
    ["pwa"]?: typeof import("@vite-pwa/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@element-plus/nuxt", Exclude<NuxtConfig["elementPlus"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["nuxt-lodash", Exclude<NuxtConfig["lodash"], boolean>] | ["/Users/hzguy/Desktop/xulong/res/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@vite-pwa/nuxt", Exclude<NuxtConfig["pwa"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<string>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         index: {
            sitemapName: string,

            _route: string,

            sitemaps: Array<any>,

            include: Array<any>,

            exclude: Array<any>,
         },

         "en-us": {
            include: Array<any>,

            exclude: Array<string|{

            }>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "id-idn": {
            include: Array<any>,

            exclude: Array<string|{

            }>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "vn-vie": {
            include: Array<any>,

            exclude: Array<string|{

            }>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "ko-kr": {
            include: Array<any>,

            exclude: Array<string|{

            }>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "zh-hk": {
            include: Array<any>,

            exclude: Array<string|{

            }>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "de-de": {
            include: Array<any>,

            exclude: Array<string|{

            }>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },

         "ja-jpn": {
            include: Array<any>,

            exclude: Array<string|{

            }>,

            includeAppSources: boolean,

            sitemapName: string,

            _route: string,

            _hasSourceChunk: boolean,
         },
      },

      autoI18n: {
         differentDomains: boolean,

         defaultLocale: string,

         locales: Array<{

         }>,

         strategy: string,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },
  }
  interface PublicRuntimeConfig {
   persistedState: {
      storage: string,

      debug: boolean,

      cookieOptions: {
         sameSite: string,
      },
   },

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      configLocales: Array<{

      }>,

      locales: {
         "en-us": {
            domain: any,
         },

         "id-idn": {
            domain: any,
         },

         "vn-vie": {
            domain: any,
         },

         "ko-kr": {
            domain: any,
         },

         "zh-hk": {
            domain: any,
         },

         "de-de": {
            domain: any,
         },

         "ja-jpn": {
            domain: any,
         },
      },

      detectBrowserLanguage: {
         alwaysRedirect: boolean,

         cookieCrossOrigin: boolean,

         cookieDomain: any,

         cookieKey: string,

         cookieSecure: boolean,

         fallbackLocale: string,

         redirectOn: string,

         useCookie: boolean,
      },

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,

         autoImportTranslationFunctions: boolean,
      },

      multiDomainLocales: boolean,
   },

   gtag: {
      enabled: boolean,

      initMode: string,

      id: string,

      initCommands: Array<any>,

      config: any,

      tags: Array<any>,

      loadingStrategy: string,

      url: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }