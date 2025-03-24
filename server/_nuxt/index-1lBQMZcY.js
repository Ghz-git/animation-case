import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { A as ACADEMY_LIST } from "./academy-B-JzUy4f.js";
import { _ as _export_sfc, J as useRoute, u as useI18n } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  emits: ["trigger"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const activeIndex = computed(() => {
      return route.query.key ? +route.query.key : route.meta.index;
    });
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trigger-btns_wrap" }, _attrs))} data-v-0b9ef1c6><div class="trigger-btns" data-v-0b9ef1c6><!--[-->`);
      ssrRenderList(unref(ACADEMY_LIST), (item, idx) => {
        _push(`<button class="${ssrRenderClass([{ acitve: unref(activeIndex) === idx }, "btn"])}" data-v-0b9ef1c6>${ssrInterpolate(unref(t)(item.label))}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/triggerBtn/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const triggerBtn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b9ef1c6"]]);
export {
  triggerBtn as default
};
//# sourceMappingURL=index-1lBQMZcY.js.map
