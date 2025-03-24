import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "item",
  __ssrInlineRender: true,
  props: {
    itemInfo: {
      type: Object,
      defalut: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "how-to-success__item" }, _attrs))} data-v-d508055b><p class="title" data-v-d508055b>${ssrInterpolate(__props.itemInfo.title)}</p><div class="subtitle" style="${ssrRenderStyle([{ background: `linear-gradient(${__props.itemInfo.subTitleColor})` }, { "background-clip": "text" }])}" data-v-d508055b>${ssrInterpolate(__props.itemInfo.subTitle)}</div><div class="content" data-v-d508055b>${ssrInterpolate(__props.itemInfo.txt)}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/howToSuccess/item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Item = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d508055b"]]);
export {
  Item as default
};
//# sourceMappingURL=item-Bw81ciBH.js.map
