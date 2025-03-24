import { _ as __nuxt_component_0 } from "./index-DJNlam7R.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useAppConfig } from "./config-81Rc5edc.js";
import { p as post } from "./useRequest-FImzQkjq.js";
import { _ as _export_sfc, u as useI18n, J as useRoute, a6 as formatterTimeZone } from "../server.mjs";
import "dayjs";
import "./directive-o9p6vhNm.js";
import "@vueuse/core";
import "@vue/shared";
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
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const getNewsDetail = (data) => {
  const config = useAppConfig();
  const postUrl = config.public.cms + "/api/v1/news/getByUrl";
  return post(postUrl, data);
};
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const removeStr = (str, char) => {
      const index = str.indexOf(char);
      if (index !== -1) {
        return str.slice(0, index);
      }
      return str;
    };
    const { t } = useI18n();
    const hostUrl = useAppConfig().public.hostUrl;
    const detailData = ref({});
    const route = useRoute();
    const lang = route.query.key;
    const urlArr = route.fullPath.split("/").reverse();
    urlArr[0] = removeStr(urlArr[0], "?");
    const paramsUrl = `${hostUrl}/${lang}/${urlArr[1]}/${urlArr[0]}`;
    getNewsDetail({ url: paramsUrl }).then((res) => {
      if (res.data) {
        detailData.value = res.data;
        detailData.value.timeStr = formatterTimeZone(res.data.releaseTime);
      }
    });
    const pageItem = ref([
      {
        path: "/academy",
        page: "User.tips7"
      },
      {
        path: "/news",
        page: "common.news"
      },
      {
        path: "",
        page: "common.newsDetails"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_publicBreadcrumb = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "newsMain" }, _attrs))} data-v-8671cde6><div class="container" data-v-8671cde6><div class="pc_show" data-v-8671cde6>`);
      _push(ssrRenderComponent(_component_publicBreadcrumb, { item: unref(pageItem) }, null, _parent));
      _push(`</div><h1 class="newsTitle" data-v-8671cde6>${ssrInterpolate((_a = unref(detailData)) == null ? void 0 : _a.title)}</h1><div class="subStr" data-v-8671cde6><p class="item" data-v-8671cde6>${ssrInterpolate((_b = unref(detailData)) == null ? void 0 : _b.type)}</p><p class="item" data-v-8671cde6><i class="iconfont icon-shijian" data-v-8671cde6></i>${ssrInterpolate((_c = unref(detailData)) == null ? void 0 : _c.timeStr)}</p></div><div class="content" data-v-8671cde6>${((_d = unref(detailData)) == null ? void 0 : _d.content) ?? ""}</div><div class="btnGroup" data-v-8671cde6><button class="btn" data-v-8671cde6>${ssrInterpolate(unref(t)("Battle.back"))}</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[type]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8671cde6"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-Bta9Q2LH.js.map
