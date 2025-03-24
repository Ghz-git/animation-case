import { _ as _export_sfc, u as useI18n, a9 as APP_METAQUOTES, a8 as __nuxt_component_1 } from "../server.mjs";
import { computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_2, a as _imports_3 } from "./icon-android-Bpd1xKD-.js";
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
const _imports_0 = "" + __buildAssetsURL("mt5-pic-mob.D1S9t-I2.png");
const _imports_1 = "" + __buildAssetsURL("mt5-pic.BrZf4yW_.png");
const _imports_4 = "" + __buildAssetsURL("icon-win.BXMcJDT0.png");
const _sfc_main = {
  __name: "mt5",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobile = computed(() => useCheckMobile().getItem());
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "mt5",
        id: "mt5"
      }, _attrs))} data-v-c1e1e463>`);
      if (unref(isMobile)) {
        _push(`<img class="pic" alt=""${ssrRenderAttr("src", _imports_0)} data-v-c1e1e463>`);
      } else {
        _push(`<img class="pic" alt=""${ssrRenderAttr("src", _imports_1)} data-v-c1e1e463>`);
      }
      _push(`<div class="content" data-v-c1e1e463><h2 class="title" data-v-c1e1e463>${ssrInterpolate(unref(t)("Footer.list.item3.children3"))}</h2><h3 class="subText" data-v-c1e1e463>${ssrInterpolate(unref(t)("Platform.text2"))}</h3><div class="downloadList" data-v-c1e1e463>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "downloadItem",
        target: "_blank",
        to: "https://www.metaquotes.net/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_2)} data-v-c1e1e463${_scopeId}><p class="name" data-v-c1e1e463${_scopeId}>Mac</p><p class="dl" data-v-c1e1e463${_scopeId}>Download &gt;</p>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_2
              }),
              createVNode("p", { class: "name" }, "Mac"),
              createVNode("p", { class: "dl" }, "Download >")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "downloadItem",
        target: "_blank",
        to: "https://apps.apple.com/cn/app/metatrader-5/id413251709"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_2)} data-v-c1e1e463${_scopeId}><p class="name" data-v-c1e1e463${_scopeId}>APP Store</p><p class="dl" data-v-c1e1e463${_scopeId}>Download &gt;</p>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_2
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
        to: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=zh&referrer=ref_id%3d5188844050395885629%26server%3dMagicCompass-live"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_3)} data-v-c1e1e463${_scopeId}><p class="name" data-v-c1e1e463${_scopeId}>Android APK</p><p class="dl" data-v-c1e1e463${_scopeId}>Download &gt;</p>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_3
              }),
              createVNode("p", { class: "name" }, "Android APK"),
              createVNode("p", { class: "dl" }, "Download >")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "downloadItem",
        target: "_blank",
        to: unref(APP_METAQUOTES)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_4)} data-v-c1e1e463${_scopeId}><p class="name" data-v-c1e1e463${_scopeId}>Windows</p><p class="dl" data-v-c1e1e463${_scopeId}>Download &gt;</p>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_4
              }),
              createVNode("p", { class: "name" }, "Windows"),
              createVNode("p", { class: "dl" }, "Download >")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/platform/index/components/mt5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const platformMt5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1e1e463"]]);
export {
  platformMt5 as default
};
//# sourceMappingURL=mt5-DpZ9swDV.js.map
