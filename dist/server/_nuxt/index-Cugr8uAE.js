import { toRefs, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
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
  props: {
    curIndex: {
      type: Number,
      default: 0
    },
    data: {
      type: Object,
      default: () => []
    }
  },
  emits: ["curChange"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const props = __props;
    const { curIndex, data } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "typesTap" }, _attrs))} data-v-115ca6eb><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ active: unref(curIndex) === index }, "typeBtn"])}" data-v-115ca6eb><span data-v-115ca6eb>${ssrInterpolate(unref(t)(item.name))}(${ssrInterpolate(item.amount)})</span></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/typesTap/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const typesTap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-115ca6eb"]]);
export {
  typesTap as default
};
//# sourceMappingURL=index-Cugr8uAE.js.map
