import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { mergeProps, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    msg: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const { t, locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "privacy-banner" }, _attrs))} data-v-9ed25865><div class="privacy-banner__inner" data-v-9ed25865><div class="privacy-banner__nav" data-v-9ed25865>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: "/",
        class: "home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("ServiceRules.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("ServiceRules.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<i class="arrow" data-v-9ed25865></i><span data-v-9ed25865>${ssrInterpolate(unref(t)(__props.msg.bTitle))}</span></div><h4 class="privacy-banner__title" data-v-9ed25865>${ssrInterpolate(unref(t)(__props.msg.bTitle))}</h4><div class="privacy-banner__date"${ssrRenderAttr("lang", unref(locale))} data-v-9ed25865><span class="date" data-v-9ed25865>${ssrInterpolate(unref(t)(__props.msg.date))}</span><span class="line" data-v-9ed25865></span><span data-v-9ed25865>${ssrInterpolate(unref(t)(__props.msg.update))}</span></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/privacyBanner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ed25865"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=index-BTmjKmHR.js.map
