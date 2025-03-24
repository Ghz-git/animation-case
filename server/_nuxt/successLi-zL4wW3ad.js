import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "successLi",
  __ssrInlineRender: true,
  props: {
    itemInfo: {
      type: Object,
      defalut: () => {
      }
    },
    listTitleColor: {
      type: String,
      defalut: ""
    },
    listTitle: {
      type: String,
      defalut: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "how-to-success__li" }, _attrs))} data-v-2f1d7f1e><div class="subtitle" style="${ssrRenderStyle([{ background: `linear-gradient(${__props.listTitleColor})` }, { "background-clip": "text" }])}" data-v-2f1d7f1e>${ssrInterpolate(__props.listTitle)}</div><!--[-->`);
      ssrRenderList(__props.itemInfo, (li, idx) => {
        _push(`<div class="content" data-v-2f1d7f1e><img${ssrRenderAttr("src", li.listIcon)} alt="" srcset="" class="icon" data-v-2f1d7f1e> ${ssrInterpolate(li.content)}</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/howToSuccess/successLi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SuccessLi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f1d7f1e"]]);
export {
  SuccessLi as default
};
//# sourceMappingURL=successLi-zL4wW3ad.js.map
