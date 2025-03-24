import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("banner-pic-pc.BsIuMxk1.png");
const _sfc_main = {
  __name: "banner",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-0e95944c><div class="textWrap" data-v-0e95944c><h2 class="title" data-v-0e95944c>${ssrInterpolate(unref(t)("User.platform"))}</h2><p class="subText" data-v-0e95944c>${ssrInterpolate(unref(t)("Platform.text1"))}</p><div class="btnGroup" data-v-0e95944c><a href="#mcMarkets" class="btn liner" data-v-0e95944c>${ssrInterpolate(unref(t)("Platform.text24"))}</a><a href="#mt5" class="btn border" data-v-0e95944c>${ssrInterpolate(unref(t)("Footer.list.item3.children3"))}</a></div></div><img class="pic" alt=""${ssrRenderAttr("src", _imports_0)} data-v-0e95944c></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/platform/index/components/banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const platformBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e95944c"]]);
export {
  platformBanner as default
};
//# sourceMappingURL=banner-CV21UMLu.js.map
