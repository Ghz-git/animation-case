import { computed, ref, toRefs, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import faqPopup from "./popup-CSIR8mSE.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { debounce } from "lodash-es";
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
  __name: "search",
  __ssrInlineRender: true,
  props: {
    list: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props, { expose: __expose }) {
    computed(() => useCheckMobile().getItem());
    const faqPopupRef = ref();
    const props = __props;
    const { list } = toRefs(props);
    const searchValue = ref("");
    const inputList = ref([]);
    const isShowSearchList = ref(false);
    debounce(() => {
      isShowSearchList.value = true;
      if (!searchValue.value) {
        inputList.value = [];
        return;
      }
      inputList.value = list.value.filter(
        (val) => val.question.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    }, 300, { "leading": false, "trailing": true });
    const closeSearchList = () => {
      isShowSearchList.value = false;
    };
    __expose({ closeSearchList });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="search" data-v-c36c70b0><i class="iconfont icon-sousuo" data-v-c36c70b0></i><input class="in"${ssrRenderAttr("value", unref(searchValue))} placeholder="Type keywords" data-v-c36c70b0>`);
      if (unref(searchValue).length > 0) {
        _push(`<i class="iconfont icon-guanbi1" data-v-c36c70b0></i>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(searchValue).length > 0) {
        _push(`<div class="${ssrRenderClass([{ active: unref(isShowSearchList) }, "searchList"])}" data-v-c36c70b0>`);
        if (unref(inputList).length > 0) {
          _push(`<div class="inner" data-v-c36c70b0><!--[-->`);
          ssrRenderList(unref(inputList), (item, index) => {
            _push(`<div class="searchItem" data-v-c36c70b0>${ssrInterpolate(item.question)}</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="inner" data-v-c36c70b0><div class="nodata" data-v-c36c70b0>no data</div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index/components/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c36c70b0"]]);
export {
  faqSearch as default
};
//# sourceMappingURL=search-X4LLKJ9V.js.map
