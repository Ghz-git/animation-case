import { _ as __nuxt_component_1 } from "./client-only-Db1Q_2tj.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "swiper/modules";
import "./entry-styles-3.mjs-IQ1Ycl8h.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "hookable";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    ref(7);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "partner",
        "data-title": unref(t)("Home.partner.title")
      }, _attrs))} data-v-49d3e4b6><div class="partner-inner" data-v-49d3e4b6><div class="title" data-v-49d3e4b6>${ssrInterpolate(unref(t)("Home.partner.title"))}</div><div class="list" data-v-49d3e4b6>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/partner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Partner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49d3e4b6"]]);
export {
  Partner as default
};
//# sourceMappingURL=index-CCFTdOgc.js.map
