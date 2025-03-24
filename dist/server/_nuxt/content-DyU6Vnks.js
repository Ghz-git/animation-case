import { ref, toRefs, unref, useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import faqPopup from "./popup-CSIR8mSE.js";
import { _ as _export_sfc } from "../server.mjs";
import "./index-DcwL4Y5F.js";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "./close-CUfcVM9H.js";
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
  __name: "content",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const faqPopupRef = ref();
    const props = __props;
    const { data } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[--><div class="content" data-v-61424f78><!--[-->`);
      ssrRenderList((_a = unref(data)) == null ? void 0 : _a.modules, (item, index) => {
        _push(`<div class="conItem" data-v-61424f78><div class="typesName" data-v-61424f78>${ssrInterpolate(item.name)}</div><ul class="questionList" data-v-61424f78><!--[-->`);
        ssrRenderList(item == null ? void 0 : item.qaList, (child, idx) => {
          _push(`<li data-v-61424f78>${ssrInterpolate(child.question)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(faqPopup, {
        ref_key: "faqPopupRef",
        ref: faqPopupRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index/components/content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61424f78"]]);
export {
  faqContent as default
};
//# sourceMappingURL=content-DyU6Vnks.js.map
