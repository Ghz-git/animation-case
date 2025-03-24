import { _ as __nuxt_component_0 } from "./index-D6B4tX2N.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import fundBanner from "./index-DhF-v0t9.js";
import fundExtendPlan from "./index-DmCihERI.js";
import fundCase from "./index-B01XN3e8.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "../server.mjs";
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
import "decimal.js";
import "dayjs";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./challengesData-Ie0NoZuw.js";
import "./yellow-BzR1n8Bd.js";
import "./doubt-Cq7olve3.js";
import "./index-B6YxXhIu.js";
import "./index-DcwL4Y5F.js";
import "./close-CUfcVM9H.js";
import "./index-Bg8OR1km.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicTipsScroll = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fund" }, _attrs))}>`);
      _push(ssrRenderComponent(fundBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsScroll, null, null, _parent));
      _push(ssrRenderComponent(fundExtendPlan, null, null, _parent));
      _push(ssrRenderComponent(fundCase, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/fund/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-cDFSEbWS.js.map
