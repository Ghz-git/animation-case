import { ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
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
  __name: "item",
  __ssrInlineRender: true,
  props: {
    itemInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["call"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const props = __props;
    const textBg = ref(`linear-gradient(${props.itemInfo.subTitleColor})`);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--88518700": unref(textBg)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "how-to-success__item" }, _attrs, _cssVars))} data-v-8ed6d618><div class="titleLine" data-v-8ed6d618><p class="title" data-v-8ed6d618>${ssrInterpolate(unref(t)(__props.itemInfo.title, { num: __props.itemInfo.stepNum }))}</p><p class="detail" data-v-8ed6d618>${ssrInterpolate(unref(t)("common.detail"))}</p></div><div class="subtitle" data-v-8ed6d618>${ssrInterpolate(unref(t)(__props.itemInfo.subTitle))}</div><div class="content" data-v-8ed6d618>${ssrInterpolate(unref(t)(__props.itemInfo.txt))}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/howToSuccess/item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Item = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ed6d618"]]);
export {
  Item as default
};
//# sourceMappingURL=item-CdlyubjY.js.map
