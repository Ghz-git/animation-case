import { ref, unref, useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
    listInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["infoHandler"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const isActive = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.listInfo, (mod, index) => {
        _push(`<div class="guide-list" data-v-c1e8f673><div class="guide-list_title" data-v-c1e8f673>${ssrInterpolate(unref(t)(mod.title))}</div><!--[-->`);
        ssrRenderList(mod.list, (item, idx) => {
          _push(`<div class="${ssrRenderClass([{ active: item.id === isActive.value }, "link"])}" data-v-c1e8f673>${ssrInterpolate(unref(t)(item.question))}</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/guide/components/guideList/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guideList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1e8f673"]]);
export {
  guideList as default
};
//# sourceMappingURL=index-C58mm09k.js.map
