import { toRefs, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  __name: "title",
  __ssrInlineRender: true,
  props: {
    context: {
      type: String,
      default: ""
    },
    keyWords: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const { context, keyWords } = toRefs(props);
    const setText = computed(() => {
      if (keyWords.value && keyWords.value.length > 0) {
        let str = context.value;
        keyWords.value.forEach((item) => {
          str = str.replace(new RegExp(item, "g"), `<span style="color: transparent;background: linear-gradient(90deg, #FF7700 62.43%, #F69846 100%);background-clip: text;">${item}</span>`);
        });
        return str;
      } else {
        return context.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "faqTitle" }, _attrs))} data-v-1827be45>${unref(setText) ?? ""}</h2>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index/components/title.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1827be45"]]);
export {
  faqTitle as default
};
//# sourceMappingURL=title-K0Q-KraV.js.map
