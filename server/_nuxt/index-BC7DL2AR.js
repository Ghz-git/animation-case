import { _ as __nuxt_component_0 } from "./index-DJNlam7R.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { _ as _export_sfc, u as useI18n, a6 as formatterTimeZone } from "../server.mjs";
import "dayjs";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "decimal.js";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "newsPage"
}, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const pageItem = ref([
      {
        path: "/academy",
        page: "User.tips7"
      },
      {
        path: "",
        page: "common.news"
      }
    ]);
    const pageData = ref({
      station: "mft",
      top: "1",
      status: 0,
      size: 10,
      current: 1,
      classify: "",
      tag: "",
      type: ""
    });
    const { t } = useI18n();
    const totalPage = ref(0);
    const newsList = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicBreadcrumb = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "newsMain" }, _attrs))} data-v-cdfcb15b><div class="container" data-v-cdfcb15b><div class="pc_show" data-v-cdfcb15b>`);
      _push(ssrRenderComponent(_component_publicBreadcrumb, { item: unref(pageItem) }, null, _parent));
      _push(`</div><div class="pageTitle" data-v-cdfcb15b><h2 class="title" data-v-cdfcb15b>${ssrInterpolate(unref(t)("common.news"))}</h2></div>`);
      if (unref(newsList).length > 0) {
        _push(`<ul class="newsList" data-v-cdfcb15b><!--[-->`);
        ssrRenderList(unref(newsList), (item, index2) => {
          _push(`<li data-v-cdfcb15b><img class="img" alt=""${ssrRenderAttr("src", item.cover)} data-v-cdfcb15b><div class="content" data-v-cdfcb15b><h3 class="title" data-v-cdfcb15b>${ssrInterpolate(item.title)}</h3><div class="text" data-v-cdfcb15b>${ssrInterpolate(item.synopsis)}</div><div class="timeLine" data-v-cdfcb15b><p class="time" data-v-cdfcb15b><i class="iconfont icon-shijian" data-v-cdfcb15b></i>${ssrInterpolate(unref(formatterTimeZone)(item.releaseTime))}</p><p class="detail" data-v-cdfcb15b><span data-v-cdfcb15b>${ssrInterpolate(unref(t)("common.newsDetails"))}</span><i class="iconfont icon-fanhui" data-v-cdfcb15b></i></p></div></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<p class="nodata" data-v-cdfcb15b>No Data !</p>`);
      }
      if (unref(totalPage) > 1) {
        _push(`<div class="pagePagination" data-v-cdfcb15b><p class="${ssrRenderClass([{ none: unref(pageData).current === 1 }, "taps"])}" data-v-cdfcb15b><i class="iconfont icon-fanhui" data-v-cdfcb15b></i></p><p class="num" data-v-cdfcb15b>${ssrInterpolate(unref(pageData).current)}</p><p class="${ssrRenderClass([{ none: unref(pageData).current === unref(totalPage) }, "taps next"])}" data-v-cdfcb15b><i class="iconfont icon-fanhui" data-v-cdfcb15b></i></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cdfcb15b"]]);
export {
  index as default
};
//# sourceMappingURL=index-BC7DL2AR.js.map
