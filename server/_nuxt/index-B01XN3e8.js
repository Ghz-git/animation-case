import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import lightingBtn from "./index-Bg8OR1km.js";
import { a as EXPANSION_PLANS_CASE } from "./challengesData-Ie0NoZuw.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "case" }, _attrs))} data-v-a6968978><h2 class="title" data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).title))}</h2><p class="subText" data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).desc, { price: "2,000,000", per: "25" }))}</p><div class="tableMobile mob_show" data-v-a6968978><!--[-->`);
      ssrRenderList(unref(EXPANSION_PLANS_CASE).table.list, (item, idx) => {
        _push(`<div class="table_mob" data-v-a6968978><div class="inner" data-v-a6968978><div class="item" data-v-a6968978><p class="p1" data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td1))}</p><p class="p2 p3" data-v-a6968978>${ssrInterpolate(unref(t)(item.times, { num: item.timeNum }))}</p></div><div class="item" data-v-a6968978><p class="p1" data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td2))}</p><p class="p2" data-v-a6968978>${ssrInterpolate(item.account)}</p></div><div class="item" data-v-a6968978><p class="p1" data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td3))}</p><p class="p2" data-v-a6968978>${ssrInterpolate(item.maxLoss)}</p></div><div class="item" data-v-a6968978><p class="p1" data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td4))}</p><p class="p2" data-v-a6968978>${ssrInterpolate(item.maxLossHistory)}</p></div></div><span class="line1" data-v-a6968978></span><span class="line2" data-v-a6968978></span></div>`);
      });
      _push(`<!--]--></div><div class="tableWrap pc_show" data-v-a6968978><div class="tableBorder" data-v-a6968978><table class="table" data-v-a6968978><thead data-v-a6968978><tr data-v-a6968978><td data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td1))}</td><td data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td2))}</td><td data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td3))}</td><td data-v-a6968978>${ssrInterpolate(unref(t)(unref(EXPANSION_PLANS_CASE).table.td4))}</td></tr></thead><tbody data-v-a6968978><!--[-->`);
      ssrRenderList(unref(EXPANSION_PLANS_CASE).table.list, (item, idx) => {
        _push(`<tr data-v-a6968978><td data-v-a6968978>${ssrInterpolate(unref(t)(item.times, { num: item.timeNum }))}</td><td data-v-a6968978>${ssrInterpolate(item.account)}</td><td data-v-a6968978>${ssrInterpolate(item.maxLoss)}</td><td data-v-a6968978>${ssrInterpolate(item.maxLossHistory)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><span class="line1" data-v-a6968978></span><span class="line2" data-v-a6968978></span></div><div class="btnComponents" data-v-a6968978>`);
      _push(ssrRenderComponent(lightingBtn, { url: "/user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="t" data-v-a6968978${_scopeId}>${ssrInterpolate(unref(t)("Login.btn1"))}</p>`);
          } else {
            return [
              createVNode("p", { class: "t" }, toDisplayString(unref(t)("Login.btn1")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/fund/components/case/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fundCase = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6968978"]]);
export {
  fundCase as default
};
//# sourceMappingURL=index-B01XN3e8.js.map
