import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    tabList: {
      type: Array,
      default: []
    }
  },
  emits: ["trigger"],
  setup(__props, { emit: __emit }) {
    ref(0);
    ref(null);
    ref(0);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tab-bar" }, _attrs))} data-v-7cc6c5bb><!--[-->`);
      ssrRenderList(__props.tabList, (tab, idx) => {
        _push(`<div class="${ssrRenderClass([{ hot: tab.isHot }, "tab-item"])}" data-v-7cc6c5bb>${ssrInterpolate(unref(t)(tab.tab))}</div>`);
      });
      _push(`<!--]--><div class="activeBg" data-v-7cc6c5bb></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/tabBar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cc6c5bb"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=index-BaLuAdQ-.js.map
