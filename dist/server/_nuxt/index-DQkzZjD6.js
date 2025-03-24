import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { C as CHALLENGES_BANNER_LIST } from "./index-D3nYuMsg.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-86887013><div class="banner-inner" data-v-86887013><div class="banner-inner__title" data-v-86887013>${ssrInterpolate(unref(t)("common.banner1"))}<br data-v-86887013>${ssrInterpolate(unref(t)("common.banner2"))}</div><div class="banner-inner__list" data-v-86887013><!--[-->`);
      ssrRenderList(unref(CHALLENGES_BANNER_LIST), ({ txt } = txt, idx) => {
        _push(`<div class="li" data-v-86887013>${ssrInterpolate(unref(t)(txt))}</div>`);
      });
      _push(`<!--]--></div><div class="banner-inner__btns" data-v-86887013>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/user",
        class: "sign-up"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Challenges.banner.btn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Challenges.banner.btn")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/banner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const challengesBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86887013"]]);
export {
  challengesBanner as default
};
//# sourceMappingURL=index-DQkzZjD6.js.map
