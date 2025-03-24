import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import guideMobHeader from "./guideMobHeader-M_LrgAG4.js";
import GuideMobCollapse from "./guideMobCollapse-DuYrbkmf.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { _ as _export_sfc } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "./back-Dn6PN45-.js";
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
import "./guide-Wol6MFZG.js";
const _sfc_main = {
  __name: "mob",
  __ssrInlineRender: true,
  setup(__props) {
    computed(() => {
      return useCheckMobile().getItem();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "guideMob" }, _attrs))} data-v-b2699d0f>`);
      _push(ssrRenderComponent(guideMobHeader, null, null, _parent));
      _push(`<div class="main" data-v-b2699d0f>`);
      _push(ssrRenderComponent(GuideMobCollapse, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/mob.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mob = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2699d0f"]]);
export {
  mob as default
};
//# sourceMappingURL=mob-D-w--0ia.js.map
