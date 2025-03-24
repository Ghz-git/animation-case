import { ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
    const { t } = useI18n();
    const props = __props;
    const textBg = ref(`linear-gradient(${props.listTitleColor})`);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--1b3d63fb": unref(textBg)
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "how-to-success__li" }, _attrs, _cssVars))} data-v-9f91776d><div class="subtitle" data-v-9f91776d>${ssrInterpolate(unref(t)(__props.listTitle))}</div><!--[-->`);
      ssrRenderList(__props.itemInfo, (li, idx) => {
        _push(`<div class="content" data-v-9f91776d><img${ssrRenderAttr("src", li.listIcon)} alt="" srcset="" class="icon" data-v-9f91776d> ${ssrInterpolate(unref(t)(li.content, { price: "2,000,000", percent: "90" }))}</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/howToSuccess/successLi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SuccessLi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f91776d"]]);
export {
  SuccessLi as default
};
//# sourceMappingURL=successLi-kfq3FYbI.js.map
