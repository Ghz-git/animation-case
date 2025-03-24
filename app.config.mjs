
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "public": {
    "mode": "development",
    "baseUrl": "",
    "hostUrl": "https://pre.magicfuturetrading.com",
    "quotes": "https://payment-test.mcmarkets.com",
    "kyc": "https://test-gateway.mcconnects.com/mc-crm",
    "kyc_token": "59f0e2da9d0040b8befa8e70b24645a4",
    "cms": "https://test-gateway.mcconnects.com/mc-cms"
  },
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /*@__PURE__*/ defuFn(inlineConfig)
