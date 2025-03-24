import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { W as WELFARE_PROGRAM } from "./challengesData-Ie0NoZuw.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "./yellow-BzR1n8Bd.js";
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
const _imports_0 = "" + __buildAssetsURL("bannerPicWelfare.ZjVkTT8s.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-f848882c><div class="textWrap" data-v-f848882c><h2 class="title" data-v-f848882c>${ssrInterpolate(unref(t)(unref(WELFARE_PROGRAM).title))}</h2><p class="subText" data-v-f848882c><span data-v-f848882c>${ssrInterpolate(unref(t)(unref(WELFARE_PROGRAM).desc))}</span></p></div><img class="pic" alt=""${ssrRenderAttr("src", _imports_0)} data-v-f848882c></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/welfare/components/banner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const welfareBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f848882c"]]);
export {
  welfareBanner as default
};
//# sourceMappingURL=index-DBoWCh90.js.map
