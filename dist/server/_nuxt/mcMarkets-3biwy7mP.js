import { _ as _export_sfc, u as useI18n, a7 as APP_MC_MARKETS, a8 as __nuxt_component_1 } from "../server.mjs";
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_2$1, a as _imports_3 } from "./icon-android-Bpd1xKD-.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
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
const _imports_0 = "" + __buildAssetsURL("line-h5.CtZ_mcvI.svg");
const _imports_1 = "" + __buildAssetsURL("line-pc.la6iblbV.svg");
const _imports_2 = "data:image/png;base64,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";
const _imports_5 = "" + __buildAssetsURL("phone-pic.DftGCN_h.png");
const _sfc_main = {
  __name: "mcMarkets",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobile = computed(() => useCheckMobile().getItem());
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "mcMarkets",
        id: "mcMarkets"
      }, _attrs))} data-v-078f86bb>`);
      if (unref(isMobile)) {
        _push(`<img class="line" alt=""${ssrRenderAttr("src", _imports_0)} data-v-078f86bb>`);
      } else {
        _push(`<img class="line" alt=""${ssrRenderAttr("src", _imports_1)} data-v-078f86bb>`);
      }
      _push(`<div class="content" data-v-078f86bb><h2 class="title" data-v-078f86bb>${ssrInterpolate(unref(t)("Platform.text24"))}</h2><h3 class="subText" data-v-078f86bb>${ssrInterpolate(unref(t)("Platform.text12"))}</h3><div class="downloadList" data-v-078f86bb>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "downloadItem",
        target: "_blank",
        to: "https://play.google.com/store/apps/details?id=com.mcmarkets.mt5&referrer="
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_2)} data-v-078f86bb${_scopeId}><p class="name" data-v-078f86bb${_scopeId}>Google Play</p><p class="dl" data-v-078f86bb${_scopeId}>Download &gt;</p>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_2
              }),
              createVNode("p", { class: "name" }, "Google Play"),
              createVNode("p", { class: "dl" }, "Download >")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "downloadItem",
        target: "_blank",
        to: "https://apps.apple.com/us/app/mc-markets/id6737656029"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_2$1)} data-v-078f86bb${_scopeId}><p class="name" data-v-078f86bb${_scopeId}>APP Store</p><p class="dl" data-v-078f86bb${_scopeId}>Download &gt;</p>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_2$1
              }),
              createVNode("p", { class: "name" }, "APP Store"),
              createVNode("p", { class: "dl" }, "Download >")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "downloadItem",
        target: "_blank",
        to: "https://oss.mcmarkets.com/mc-assets/APK/mcAndroid.apk"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_3)} data-v-078f86bb${_scopeId}><p class="name" data-v-078f86bb${_scopeId}>Andriod APK</p><p class="dl" data-v-078f86bb${_scopeId}>Download &gt;</p>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_3
              }),
              createVNode("p", { class: "name" }, "Andriod APK"),
              createVNode("p", { class: "dl" }, "Download >")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "btn",
        target: "_blank",
        to: unref(APP_MC_MARKETS)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Platform.text13"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Platform.text13")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img class="pic" alt=""${ssrRenderAttr("src", _imports_5)} data-v-078f86bb></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/platform/index/components/mcMarkets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const platformMcMarkets = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-078f86bb"]]);
export {
  platformMcMarkets as default
};
//# sourceMappingURL=mcMarkets-3biwy7mP.js.map
