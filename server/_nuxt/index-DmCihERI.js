import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./doubt-Cq7olve3.js";
import contentTipsPopup from "./index-B6YxXhIu.js";
import { E as EXPANSION_PLANS } from "./challengesData-Ie0NoZuw.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "./index-DcwL4Y5F.js";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "./close-CUfcVM9H.js";
import "./yellow-BzR1n8Bd.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const QAPopupRef = ref();
    const popupContent = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "plan" }, _attrs))} data-v-377a2e09><h2 class="title" data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).title))}</h2><p class="subText" data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).desc, { price: "2,000,000", per: "25" }))}</p><div class="tableWrap" data-v-377a2e09><div class="tableBorder" data-v-377a2e09><table class="table" data-v-377a2e09><thead data-v-377a2e09><tr data-v-377a2e09><td class="box1" data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).condition.name))}</td><td data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).benefit.name))}</td></tr></thead><tbody data-v-377a2e09><tr data-v-377a2e09><td data-v-377a2e09><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).condition.desc1))}</td><td class="box2" rowspan="2" data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).benefit.desc1))}</td></tr><tr data-v-377a2e09><td data-v-377a2e09><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).condition.desc2, { percent: 10 }))}</td></tr><tr data-v-377a2e09><td data-v-377a2e09><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).condition.desc3, { num: 2 }))}</td><td class="box2" rowspan="2" data-v-377a2e09><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).benefit.desc2, { price: "2,000,000" }))}</td></tr><tr data-v-377a2e09><td data-v-377a2e09><img class="icon" alt=""${ssrRenderAttr("src", _imports_0)} data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).condition.desc4))}</td></tr></tbody></table></div><span class="line1" data-v-377a2e09></span><span class="line2" data-v-377a2e09></span></div><p class="tips" data-v-377a2e09>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS).read))}</p>`);
      _push(ssrRenderComponent(contentTipsPopup, {
        ref_key: "QAPopupRef",
        ref: QAPopupRef,
        content: unref(popupContent)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/fund/components/plan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fundExtendPlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-377a2e09"]]);
export {
  fundExtendPlan as default
};
//# sourceMappingURL=index-DmCihERI.js.map
