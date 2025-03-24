import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import Banner from "./index-BGjMW6HE.js";
import Base from "./index-j22b8cqx.js";
import Forbid from "./index-BKsiGQYv.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "../server.mjs";
import "decimal.js";
import "dayjs";
import "./index-DJNlam7R.js";
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
import "./index-DP8eDe_k.js";
import "./index-Dqop3Kqz.js";
import "./index-BVvjx3G1.js";
import "./event-DsDEmsKp.js";
import "./isMobile-BdEqHLRM.js";
import "./index-D3nYuMsg.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trading-rules" }, _attrs))}>`);
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(ssrRenderComponent(Base, null, null, _parent));
      _push(ssrRenderComponent(Forbid, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tradingRules/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BinylL7K.js.map
