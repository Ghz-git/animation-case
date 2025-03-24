import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
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
const _sfc_main = {
  __name: "videoBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "academy-banner" }, _attrs))} data-v-fae7e39e><div class="academy-banner_banner" data-v-fae7e39e><div class="banner-title" data-v-fae7e39e>${ssrInterpolate(unref(t)("User.tips7"))}</div><div class="banner-desc" data-v-fae7e39e>${ssrInterpolate(unref(t)("Education.desc"))}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academy/education/components/videoBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const videoBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fae7e39e"]]);
export {
  videoBanner as default
};
//# sourceMappingURL=videoBanner-1q0o2EaF.js.map
