import { _ as __nuxt_component_1 } from "./page-CZB8r_e5.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "vue-router";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "decimal.js";
import "dayjs";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main = {
  __name: "content",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_page = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_page, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=content-3RIJeHOU.js.map
