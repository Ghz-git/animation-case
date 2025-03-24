import "vue";
import { klona } from "klona";
import { m as useNuxtApp } from "../server.mjs";
import "hookable";
import { defuFn } from "defu";
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
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
export {
  useAppConfig as u
};
//# sourceMappingURL=config-81Rc5edc.js.map
