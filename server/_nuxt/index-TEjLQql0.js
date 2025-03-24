import { _ as __nuxt_component_0 } from "./index-DzSnyPvj.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./back-Dn6PN45-.js";
import { u as useAccount, m as modeList } from "./useAccount-Ba5l_-oJ.js";
import { _ as _export_sfc, J as useRoute, u as useI18n } from "../server.mjs";
import "dayjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "@vueuse/core";
import "@vue/shared";
import "./config-81Rc5edc.js";
import "./Norway-DkftQzDj.js";
import "lodash-es";
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
import "consola";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const loginBG = "" + __buildAssetsURL("loginBG.B8ur6Kqw.jpg");
const __default__ = defineComponent({
  beforeRouteEnter(to, from, next) {
    next(function(vm) {
      vm.historyUrl = from.name;
    });
  }
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    useAccount();
    const pageType = ref(1);
    const route = useRoute();
    pageType.value = route.query.type ? Number(route.query.type) : 1;
    const { t } = useI18n();
    let formArr = [];
    formArr = pageType.value === 1 ? ["email", "validCode", "password", "checkPassword"] : ["phone", "validCode", "password", "checkPassword"];
    const formClass = ref(new modeList(formArr));
    const formList = ref(formClass.value.list);
    const historyUrl = ref();
    route.query.source;
    __expose({ historyUrl });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicInputForm = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "loginMain",
        style: { backgroundImage: `url(${unref(loginBG)})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }
      }, _attrs))} data-v-b1603ca4><div class="content" data-v-b1603ca4><div class="loginCel" data-v-b1603ca4><p class="title" data-v-b1603ca4>${ssrInterpolate(unref(t)("Login.forget"))} <img class="back"${ssrRenderAttr("src", _imports_0)} data-v-b1603ca4></p><div class="forgetWrap" data-v-b1603ca4></div>`);
      _push(ssrRenderComponent(_component_publicInputForm, {
        formList: formList.value,
        formClass: formClass.value
      }, null, _parent));
      _push(`<button class="subBtn" data-v-b1603ca4>${ssrInterpolate(unref(t)("Login.btn2"))}</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgetPassword/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b1603ca4"]]);
export {
  index as default
};
//# sourceMappingURL=index-TEjLQql0.js.map
