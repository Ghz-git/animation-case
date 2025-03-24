import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./back-Dn6PN45-.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main = {
  __name: "guideMobHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navHead" }, _attrs))} data-v-9e2870ea><img class="back" alt=""${ssrRenderAttr("src", _imports_0)} data-v-9e2870ea><div data-v-9e2870ea>${ssrInterpolate(unref(t)("Guide.page"))}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/components/guideMobHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guideMobHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e2870ea"]]);
export {
  guideMobHeader as default
};
//# sourceMappingURL=guideMobHeader-M_LrgAG4.js.map
