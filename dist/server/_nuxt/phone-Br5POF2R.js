import { _ as __nuxt_component_0 } from "./index-DzSnyPvj.js";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useAccount, m as modeList } from "./useAccount-Ba5l_-oJ.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "dayjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "@vueuse/core";
import "@vue/shared";
import "./config-81Rc5edc.js";
import "./Norway-DkftQzDj.js";
import "lodash-es";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "consola";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main = {
  __name: "phone",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    useAccount();
    const { t } = useI18n();
    const formClass = ref(new modeList(["phone", "validCode", "password", "checkPassword"]));
    const formList = ref(formClass.value.list);
    const bindPhonePrefixTransfer = () => {
      formClass.value.bindPhonePrefixListClose();
    };
    __expose({ bindPhonePrefixTransfer });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicInputForm = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_publicInputForm, {
        formList: formList.value,
        formClass: formClass.value
      }, null, _parent));
      _push(`<button class="subBtn mt40" data-v-c88e7a3c>${ssrInterpolate(unref(t)("Login.title2"))}</button><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/components/phone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const registerPhone = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c88e7a3c"]]);
export {
  registerPhone as default
};
//# sourceMappingURL=phone-Br5POF2R.js.map
