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
  __name: "focusText",
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
    const textLength = computed(() => {
      return context.value.length;
    });
    const setText = computed(() => {
      if (keyWords.value && keyWords.value.length > 0) {
        let str = context.value;
        keyWords.value.forEach((item) => {
          str = str.replace(new RegExp(item, "g"), `<span style="background: #FF7700;padding: 0 2px;border-radius: 3px;">${item}</span>`);
        });
        return str;
      } else {
        return context.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: ["focusText", { txt3: unref(textLength) < 20 }]
      }, _attrs))} data-v-d0599fb5>${unref(setText) ?? ""}</p>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academy/education/components/focusText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const focusText = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0599fb5"]]);
export {
  focusText as default
};
//# sourceMappingURL=focusText-C6YvztuB.js.map
