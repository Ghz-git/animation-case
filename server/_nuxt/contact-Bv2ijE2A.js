import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./index-D6B4tX2N.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "dayjs";
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
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-3ed6d9c2><div class="banner-inner" data-v-3ed6d9c2><div class="banner-inner__title" data-v-3ed6d9c2>${ssrInterpolate(unref(t)("ContactUs.banner.title"))}</div><div class="banner-inner__cxt" data-v-3ed6d9c2>${ssrInterpolate(unref(t)("ContactUs.banner.cxt", { email: "mft@mcgrp.com" }))}</div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/banner/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3ed6d9c2"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-info" }, _attrs))} data-v-7cc268c4><div class="title" data-v-7cc268c4>Our Locations</div><div class="address" data-v-7cc268c4> Advanced MCN Limited<br data-v-7cc268c4>Address: FLAT/RM 902, CENTRAL PLAZA, 18 HARBOUR ROAD, WAN CHAI,HONG KONG<br data-v-7cc268c4>Email: operations@mcgrp.com </div><div class="address" data-v-7cc268c4> MAGIC COMPASS LTD<br data-v-7cc268c4>Address: Sarlo 9, Agios Athanasios, 4106 Limassol, Cyprus<br data-v-7cc268c4>Email: operations@mcgrp.com,info@magiccompass.com </div><div class="address" data-v-7cc268c4> Magic Compass Pte Ltd<br data-v-7cc268c4>Address: 8 TEMASEK BOULEVARD, #41-02, SUNTEC TOWER 3, Singapore 038988<br data-v-7cc268c4>Email: mft@mcgrp.com </div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/info/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7cc268c4"]]);
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_contactBanner = __nuxt_component_0;
      const _component_publicTipsScroll = __nuxt_component_0$1;
      const _component_contactInfo = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-us" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_contactBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsScroll, null, null, _parent));
      _push(ssrRenderComponent(_component_contactInfo, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-Bv2ijE2A.js.map
