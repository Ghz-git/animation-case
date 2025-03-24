import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import guidePwaHeader from "./guidePwaHeader-DjcXufjq.js";
import guidePwaMain from "./guidePwaMain-Wi_vwbNE.js";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "./mft-D9ZFXrBO.js";
import "decimal.js";
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
import "./index-BVvjx3G1.js";
import "./event-DsDEmsKp.js";
/* empty css                          */
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "guide-pwa" }, _attrs))} data-v-ddb81d40>`);
      _push(ssrRenderComponent(guidePwaHeader, null, null, _parent));
      _push(`<div class="guide-pwa_main" data-v-ddb81d40>`);
      _push(ssrRenderComponent(guidePwaMain, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/homeScreen/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ddb81d40"]]);
export {
  index as default
};
//# sourceMappingURL=index-Bugof2Jt.js.map
