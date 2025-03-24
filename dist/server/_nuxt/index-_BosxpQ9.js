import { _ as __nuxt_component_0 } from "./index-D6B4tX2N.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import welfareBanner from "./index-DBoWCh90.js";
import welfareContent from "./index-qICb8Mn8.js";
import { _ as _export_sfc } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "dayjs";
import "decimal.js";
import "./challengesData-Ie0NoZuw.js";
import "./yellow-BzR1n8Bd.js";
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
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./doubt-Cq7olve3.js";
import "./index-B6YxXhIu.js";
import "./index-DcwL4Y5F.js";
import "./close-CUfcVM9H.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicTipsScroll = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "welfare" }, _attrs))} data-v-ce68bc19>`);
      _push(ssrRenderComponent(welfareBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsScroll, null, null, _parent));
      _push(ssrRenderComponent(welfareContent, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/welfare/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce68bc19"]]);
export {
  index as default
};
//# sourceMappingURL=index-_BosxpQ9.js.map
