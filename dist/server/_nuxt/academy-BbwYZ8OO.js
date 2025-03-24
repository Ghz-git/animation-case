import { _ as __nuxt_component_0 } from "./index--7XThH9K.js";
import { _ as __nuxt_component_1 } from "./page-CZB8r_e5.js";
import { _ as __nuxt_component_2 } from "./index-CWkfqhve.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import academyBanner from "./academyBanner-BXFTN6aI.js";
import triggerBtn from "./index-1lBQMZcY.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "decimal.js";
import "dayjs";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./icon_hover-n9y39lIQ.js";
import "./icon-card1-Cffy6RY4.js";
import "./mobHead-B7p5ITrc.js";
import "./isMobile-BdEqHLRM.js";
import "lodash-es";
import "./index-BVvjx3G1.js";
import "./event-DsDEmsKp.js";
import "./index-Bms85OJQ.js";
import "./index-DcwL4Y5F.js";
import "./close-CUfcVM9H.js";
/* empty css                          */
import "./useAccount-Ba5l_-oJ.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./Norway-DkftQzDj.js";
import "./NewZealand-bu8O6zsF.js";
import "./mft-D9ZFXrBO.js";
import "./academy-B-JzUy4f.js";
const _sfc_main = {
  __name: "academy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicHeader = __nuxt_component_0;
      const _component_nuxt_page = __nuxt_component_1;
      const _component_publicFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "academy" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_publicHeader, null, null, _parent));
      _push(ssrRenderComponent(academyBanner, null, null, _parent));
      _push(ssrRenderComponent(triggerBtn, null, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_page, null, null, _parent));
      _push(ssrRenderComponent(_component_publicFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/academy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=academy-BbwYZ8OO.js.map
