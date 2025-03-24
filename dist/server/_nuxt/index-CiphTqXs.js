import { _ as __nuxt_component_0 } from "./index-D6B4tX2N.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import platformBanner from "./banner-CV21UMLu.js";
import platformMt5 from "./mt5-DpZ9swDV.js";
import platformMcMarkets from "./mcMarkets-3biwy7mP.js";
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
import "./icon-android-Bpd1xKD-.js";
import "./isMobile-BdEqHLRM.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicTipsScroll = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "platform" }, _attrs))}>`);
      _push(ssrRenderComponent(platformBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsScroll, null, null, _parent));
      _push(ssrRenderComponent(platformMt5, null, null, _parent));
      _push(ssrRenderComponent(platformMcMarkets, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/platform/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CiphTqXs.js.map
