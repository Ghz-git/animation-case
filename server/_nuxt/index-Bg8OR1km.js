import { toRefs, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  props: {
    url: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lightingBtn" }, _attrs))} data-v-7444d55d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/lightingBtn/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lightingBtn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7444d55d"]]);
export {
  lightingBtn as default
};
//# sourceMappingURL=index-Bg8OR1km.js.map
