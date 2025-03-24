import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import ucHeader from "./ucHeader-BVT7PDNV.js";
import ucAside from "./ucAside-ajK0ZTqD.js";
import ucContent from "./ucMain-CEfZz4jw.js";
import { _ as _export_sfc, a5 as useSeoMeta, J as useRoute } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "./mobHead-B7p5ITrc.js";
import "./isMobile-BdEqHLRM.js";
import "lodash-es";
import "./index-BVvjx3G1.js";
import "@vue/shared";
import "./event-DsDEmsKp.js";
import "lodash-unified";
import "./index-Bms85OJQ.js";
import "./index-DcwL4Y5F.js";
import "decimal.js";
import "dayjs";
import "./close-CUfcVM9H.js";
/* empty css                          */
import "./icon_hover-n9y39lIQ.js";
import "./icon-card1-Cffy6RY4.js";
import "./useAccount-Ba5l_-oJ.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "@vueuse/core";
import "./config-81Rc5edc.js";
import "./Norway-DkftQzDj.js";
import "./NewZealand-bu8O6zsF.js";
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
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./mft-D9ZFXrBO.js";
import "./page-CZB8r_e5.js";
const _sfc_main = {
  __name: "ucenter",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      ssr: false
    });
    const route = useRoute();
    const activeIndex = computed(() => {
      return route.meta.index;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap_ucenter" }, _attrs))} data-v-32ac28b5>`);
      _push(ssrRenderComponent(ucAside, { asideIndex: activeIndex.value }, null, _parent));
      _push(`<div class="ucContainer" data-v-32ac28b5>`);
      _push(ssrRenderComponent(ucHeader, null, null, _parent));
      _push(ssrRenderComponent(ucContent, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/ucenter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ucenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32ac28b5"]]);
export {
  ucenter as default
};
//# sourceMappingURL=ucenter-BniGPwYn.js.map
