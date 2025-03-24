import { _ as __nuxt_component_0 } from "./index-DJNlam7R.js";
import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("rules-bg.Ber1Tzsl.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const item = ref([
      {
        path: "/academy",
        page: "User.tips7"
      },
      {
        path: "",
        page: "TradingRules.banner.title"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicBreadcrumb = __nuxt_component_0;
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-d1f55344><div class="banner-breadcrumb" data-v-d1f55344>`);
      _push(ssrRenderComponent(_component_publicBreadcrumb, { item: unref(item) }, null, _parent));
      _push(`</div><img${ssrRenderAttr("src", _imports_0)} alt="" class="bg" data-v-d1f55344><div class="banner-inner" data-v-d1f55344><div class="banner-inner__title" data-v-d1f55344>${ssrInterpolate(unref(t)("TradingRules.banner.title"))}</div><div class="banner-inner__txt" data-v-d1f55344>${ssrInterpolate(unref(t)("TradingRules.banner.desc"))}</div><div class="banner-inner__btns" data-v-d1f55344>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/challenges",
        class: "price-diff"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("TradingRules.banner.btn1"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("TradingRules.banner.btn1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tradingRules/components/banner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d1f55344"]]);
export {
  Banner as default
};
//# sourceMappingURL=index-BGjMW6HE.js.map
