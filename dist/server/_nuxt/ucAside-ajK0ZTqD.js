import { _ as _export_sfc, u as useI18n, A as APP_DISCORD, a as __nuxt_component_2, a8 as __nuxt_component_1 } from "../server.mjs";
import { computed, toRefs, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./mft-D9ZFXrBO.js";
import { I as ICON_LIST, U as UC_MENU_LIST, _ as _imports_1, a as _imports_2 } from "./icon_hover-n9y39lIQ.js";
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
import "./icon-card1-Cffy6RY4.js";
const _sfc_main = {
  __name: "ucAside",
  __ssrInlineRender: true,
  props: {
    asideIndex: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    const { t, locale } = useI18n();
    const lang = computed(() => locale.value);
    const props = __props;
    const { asideIndex } = toRefs(props);
    const discordUrl = APP_DISCORD;
    const linkList = computed(() => {
      let copy = JSON.parse(JSON.stringify(ICON_LIST));
      copy.pop();
      return copy;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "ucAside",
        lang: lang.value
      }, _attrs))} data-v-12458f0f>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-12458f0f${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="menuNormal" data-v-12458f0f><!--[-->`);
      ssrRenderList(unref(UC_MENU_LIST).normal.list, (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: ["menuTap", { active: unref(asideIndex) === item.key }],
          to: item.path,
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img alt="" class="icon default"${ssrRenderAttr("src", item.icon1)} data-v-12458f0f${_scopeId}><img alt="" class="icon hover"${ssrRenderAttr("src", item.icon2)} data-v-12458f0f${_scopeId}> ${ssrInterpolate(unref(t)(item.label))}`);
            } else {
              return [
                createVNode("img", {
                  alt: "",
                  class: "icon default",
                  src: item.icon1
                }, null, 8, ["src"]),
                createVNode("img", {
                  alt: "",
                  class: "icon hover",
                  src: item.icon2
                }, null, 8, ["src"]),
                createTextVNode(" " + toDisplayString(unref(t)(item.label)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="menuTools" data-v-12458f0f><!--[-->`);
      ssrRenderList(unref(UC_MENU_LIST).tools.list, (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "menuTap",
          to: item.path,
          key: index,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img alt="" class="icon default"${ssrRenderAttr("src", item.icon1)} data-v-12458f0f${_scopeId}><img alt="" class="icon hover"${ssrRenderAttr("src", item.icon2)} data-v-12458f0f${_scopeId}> ${ssrInterpolate(unref(t)(item.label))}`);
            } else {
              return [
                createVNode("img", {
                  alt: "",
                  class: "icon default",
                  src: item.icon1
                }, null, 8, ["src"]),
                createVNode("img", {
                  alt: "",
                  class: "icon hover",
                  src: item.icon2
                }, null, 8, ["src"]),
                createTextVNode(" " + toDisplayString(unref(t)(item.label)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="menuPlatform" data-v-12458f0f><!--[-->`);
      ssrRenderList(unref(UC_MENU_LIST).platform.list, (item, index) => {
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "menuTap",
          to: item.path,
          key: index,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img alt="" class="icon default"${ssrRenderAttr("src", item.icon1)} data-v-12458f0f${_scopeId}><img alt="" class="icon hover"${ssrRenderAttr("src", item.icon2)} data-v-12458f0f${_scopeId}> ${ssrInterpolate(unref(t)(item.label))}`);
            } else {
              return [
                createVNode("img", {
                  alt: "",
                  class: "icon default",
                  src: item.icon1
                }, null, 8, ["src"]),
                createVNode("img", {
                  alt: "",
                  class: "icon hover",
                  src: item.icon2
                }, null, 8, ["src"]),
                createTextVNode(" " + toDisplayString(unref(t)(item.label)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="asideBottom" data-v-12458f0f>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "joinBtn",
        to: unref(discordUrl),
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_1)} data-v-12458f0f${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon-active" data-v-12458f0f${_scopeId}><span data-v-12458f0f${_scopeId}>${ssrInterpolate(unref(t)("Home.banner.join"))}</span>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_1
              }),
              createVNode("img", {
                src: _imports_2,
                alt: "",
                class: "icon-active"
              }),
              createVNode("span", null, toDisplayString(unref(t)("Home.banner.join")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="linkList" data-v-12458f0f><!--[-->`);
      ssrRenderList(linkList.value, (item, idx) => {
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "link",
          to: item.path,
          target: "_blank",
          key: idx,
          "data-hover": item.platform
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img alt=""${ssrRenderAttr("src", item.directive)} class="default" data-v-12458f0f${_scopeId}><img alt=""${ssrRenderAttr("src", item.active)} class="active" data-v-12458f0f${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  alt: "",
                  src: item.directive,
                  class: "default"
                }, null, 8, ["src"]),
                createVNode("img", {
                  alt: "",
                  src: item.active,
                  class: "active"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "website",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`website`);
          } else {
            return [
              createTextVNode("website")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</aside>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/ucAside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ucAside = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-12458f0f"]]);
export {
  ucAside as default
};
//# sourceMappingURL=ucAside-ajK0ZTqD.js.map
