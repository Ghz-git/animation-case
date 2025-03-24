import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const academyBg = "" + __buildAssetsURL("academyBg.CT8eBbof.png");
const academyHouse = "" + __buildAssetsURL("academyHouse.D5XU-aE2.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "academyBanner" }, _attrs))} data-v-4240968e><img alt="" class="bgPic"${ssrRenderAttr("src", unref(academyBg))} data-v-4240968e><img alt="" class="house"${ssrRenderAttr("src", unref(academyHouse))} data-v-4240968e><div class="textWrap" data-v-4240968e><p class="text1" data-v-4240968e>${ssrInterpolate(unref(t)("Education.all"))}</p><p class="text2" data-v-4240968e>${ssrInterpolate(unref(t)("Education.theme"))}</p><p class="text3" data-v-4240968e>${ssrInterpolate(unref(t)("Education.desc1"))}</p>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "startBtn",
        to: "/guide"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Education.learn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Education.learn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academy/index/components/banner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const academyBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4240968e"]]);
export {
  academyBanner as default
};
//# sourceMappingURL=index-CJUU2g_A.js.map
