import { ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0 } from "./back-Dn6PN45-.js";
import { _ as _export_sfc, u as useI18n, m as useNuxtApp } from "../server.mjs";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "dayjs";
const _sfc_main = {
  __name: "backLine",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useNuxtApp();
    ref("");
    const isShow = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(isShow)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "backLine" }, _attrs))} data-v-f8d93e1e><div class="battle_back" data-v-f8d93e1e><span class="icon" data-v-f8d93e1e><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-f8d93e1e></span> ${ssrInterpolate(unref(t)("Battle.back"))}</div>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/battle/backLine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const battleBackLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8d93e1e"]]);
export {
  battleBackLine as b
};
//# sourceMappingURL=backLine-s-8UBp52.js.map
