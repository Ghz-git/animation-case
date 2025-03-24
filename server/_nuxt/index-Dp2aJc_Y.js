import { _ as _export_sfc, u as useI18n, a5 as useSeoMeta, a as __nuxt_component_2 } from "../server.mjs";
import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as _imports_0 } from "./index-DzSnyPvj.js";
import { _ as _imports_0$1 } from "./mft-D9ZFXrBO.js";
import loginEmail from "./email-BoJtxVN9.js";
import loginPhone from "./phone-BCOiybQF.js";
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
import "./useAccount-Ba5l_-oJ.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./Norway-DkftQzDj.js";
import "lodash-es";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loginType = ref(1);
    const loginPhoneRef = ref();
    const { t } = useI18n();
    useSeoMeta({
      // title: t("pagesName.Login"),
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loginMain" }, _attrs))} data-v-bfacd8d9><div class="content" data-v-bfacd8d9>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="close mob_show"${ssrRenderAttr("src", _imports_0)} data-v-bfacd8d9${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "close mob_show",
                src: _imports_0
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="loginCel" data-v-bfacd8d9><p class="title pc_show" data-v-bfacd8d9>${ssrInterpolate(unref(t)("Login.title1"))}</p><img class="logo mob_show"${ssrRenderAttr("src", _imports_0$1)} data-v-bfacd8d9><div class="taps_wrap" data-v-bfacd8d9><p class="${ssrRenderClass([{ active: loginType.value === 1 }, "tap"])}" data-v-bfacd8d9>${ssrInterpolate(unref(t)("Login.loginType1"))}</p><p class="${ssrRenderClass([{ active: loginType.value === 2 }, "tap"])}" data-v-bfacd8d9>${ssrInterpolate(unref(t)("Login.loginType2"))}</p></div>`);
      if (loginType.value === 1) {
        _push(ssrRenderComponent(loginEmail, null, null, _parent));
      } else {
        _push(ssrRenderComponent(loginPhone, {
          ref_key: "loginPhoneRef",
          ref: loginPhoneRef
        }, null, _parent));
      }
      _push(`<p class="goSignUp" data-v-bfacd8d9>${ssrInterpolate(unref(t)("Login.Noaccount"))}? `);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/register",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.title2"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.title2")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="mob_line mob_show" data-v-bfacd8d9><div class="fl" data-v-bfacd8d9>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "link",
        to: "/forgetPassword?type=" + loginType.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.forget"))}?`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.forget")) + "?", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="fr" data-v-bfacd8d9><span data-v-bfacd8d9>${ssrInterpolate(unref(t)("Login.Noaccount"))}? `);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/register",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.title2"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.title2")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div><div class="tips" data-v-bfacd8d9>${ssrInterpolate(unref(t)("Login.loginTips1"))} `);
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
      _push(`. ${ssrInterpolate(unref(t)("Login.loginTips2"))}</div></div><div class="mob_more mob_show" data-v-bfacd8d9><div class="tips" data-v-bfacd8d9>${ssrInterpolate(unref(t)("Login.loginTips1"))} `);
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfacd8d9"]]);
export {
  index as default
};
//# sourceMappingURL=index-Dp2aJc_Y.js.map
