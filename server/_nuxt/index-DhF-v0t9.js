import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { E as EXPANSION_PLANS } from "./challengesData-Ie0NoZuw.js";
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
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAXVBMVEUAAAD/dwD/dwD/eAD/dgD/dgD/dwD/dwD/eAD/dwD/dgD/cAD/dAD/dwD/dwD/////7t//iCD/fxD/9+//qmD/xJD/5c//3b//u4D/u3//s3D/kTD/zKD/s2//oVB1Qmq5AAAADnRSTlMA768gcM+/gECfYBBAb+9yWn8AAAD9SURBVDjLjZTpssIgDEbDpl30o7bU9V7f/zG1FAoItZ4/DMyZBDIJFNHKWjGAKd4IKnHYIYIfMkF4IUgfkY4MGUzGxh5F9omx4Ryxissl2LrC5jtzfGFn64GvVOtB7qb3YURR6C9aX2BpqSkZp7N+4x/FS0Y3GR0sNanceFjj3MOiyBXFDJ1xxnOYjD9ngBFmpuPRnv7riRELsaK7E3CzxhWBJZG23Ea73BFgpMIrPINBhKJ6qdbojQdiOMmwMZ27UEJDbVKy3IAgSvr6aguW5iGqtpvBhynDf21MkuuK3B6SX0YtIMsDmyB4Nh6CPql4IlRUQjR8/oJq2VLgBSWzMk0EBogDAAAAAElFTkSuQmCC";
const _imports_1 = "" + __buildAssetsURL("bannerPicFund.BzeeddH0.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-bac9f0da><div class="textWrap" data-v-bac9f0da><h2 class="title" data-v-bac9f0da>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).bannerTitle))}</h2><div class="list" data-v-bac9f0da><p class="subText" data-v-bac9f0da><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-bac9f0da><span data-v-bac9f0da>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).bannerDesc.list1, { percent: 100 }))}</span></p><p class="subText" data-v-bac9f0da><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-bac9f0da><span data-v-bac9f0da>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).bannerDesc.list2))}</span></p><p class="subText" data-v-bac9f0da><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-bac9f0da><span data-v-bac9f0da>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).bannerDesc.list3))}</span></p></div></div><img class="pic" alt=""${ssrRenderAttr("src", _imports_1)} data-v-bac9f0da></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/fund/components/banner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fundBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bac9f0da"]]);
export {
  fundBanner as default
};
//# sourceMappingURL=index-DhF-v0t9.js.map
