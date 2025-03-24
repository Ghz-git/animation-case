import { _ as _export_sfc, u as useI18n, J as useRoute, a as __nuxt_component_2 } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./back-Dn6PN45-.js";
import registerEmail from "./email-D1EzQ1vF.js";
import registerPhone from "./phone-Br5POF2R.js";
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
import "./index-DzSnyPvj.js";
import "./useAccount-Ba5l_-oJ.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./Norway-DkftQzDj.js";
import "lodash-es";
const __default__ = defineComponent({
  beforeRouteEnter(to, from, next) {
    next(function(vm) {
      vm.historyUrl = from.name;
    });
  }
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const registerPhoneRef = ref();
    const registerType = ref(1);
    const { t } = useI18n();
    const route = useRoute();
    route.query.source;
    const historyUrl = ref();
    __expose({ historyUrl });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loginMain" }, _attrs))} data-v-80ec951b><div class="content" data-v-80ec951b><div class="loginCel" data-v-80ec951b><p class="title" data-v-80ec951b>${ssrInterpolate(unref(t)("Login.title2"))}<img class="back"${ssrRenderAttr("src", _imports_0)} data-v-80ec951b></p><div class="taps_wrap" data-v-80ec951b><p class="${ssrRenderClass([{ active: registerType.value === 1 }, "tap"])}" data-v-80ec951b>${ssrInterpolate(unref(t)("Login.registerType1"))}</p><p class="${ssrRenderClass([{ active: registerType.value === 2 }, "tap"])}" data-v-80ec951b>${ssrInterpolate(unref(t)("Login.registerType2"))}</p></div>`);
      if (registerType.value === 1) {
        _push(ssrRenderComponent(registerEmail, null, null, _parent));
      } else {
        _push(ssrRenderComponent(registerPhone, {
          ref_key: "registerPhoneRef",
          ref: registerPhoneRef
        }, null, _parent));
      }
      _push(`<p class="goSignUp" data-v-80ec951b>${ssrInterpolate(unref(t)("Login.HasAccount"))} `);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/login",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.title1"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.title1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="mob_line mob_show" data-v-80ec951b><div class="fl" data-v-80ec951b><span data-v-80ec951b>${ssrInterpolate(unref(t)("Login.HasAccount"))} <button class="link" data-v-80ec951b>${ssrInterpolate(unref(t)("Login.title1"))}</button></span></div></div><div class="tips" data-v-80ec951b>${ssrInterpolate(unref(t)("Login.loginTips1"))} `);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/privacy",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.tipsPrivacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.tipsPrivacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/service",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.tipsAgreement"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.tipsAgreement")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. ${ssrInterpolate(unref(t)("Login.loginTips2"))}</div></div><div class="mob_more mob_show" data-v-80ec951b><div class="tips" data-v-80ec951b>${ssrInterpolate(unref(t)("Login.loginTips1"))} `);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/privacy",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.tipsPrivacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.tipsPrivacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/service",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.tipsAgreement"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.tipsAgreement")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. ${ssrInterpolate(unref(t)("Login.loginTips2"))}</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80ec951b"]]);
export {
  index as default
};
//# sourceMappingURL=index-CtD61AEo.js.map
