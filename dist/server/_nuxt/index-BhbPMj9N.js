import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { _ as __nuxt_component_1 } from "./index-BaLuAdQ-.js";
import { reactive, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { T as TAB_LIST } from "./index-D3nYuMsg.js";
import { _ as _export_sfc, u as useI18n, n as nuxtTo } from "../server.mjs";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
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
import "dayjs";
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
    const tabList = reactive(TAB_LIST);
    const { t } = useI18n();
    let battleId = ref(0);
    const trigger = (tab) => {
    };
    const linkTo = () => {
      nuxtTo("/user", {
        idx: battleId.value
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      const _component_publicTabBar = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scaling-plan-h5" }, _attrs))} data-v-04b74c68>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: unref(t)("Challenges.ScalingPlan.title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_publicTabBar, {
              tabList: unref(tabList),
              onTrigger: trigger
            }, null, _parent2, _scopeId));
            _push2(`<div class="scaling-plan-h5__collapse" data-v-04b74c68${_scopeId}><div class="list" data-v-04b74c68${_scopeId}><!--[-->`);
            ssrRenderList(4, (val) => {
              _push2(`<div class="list-item" data-v-04b74c68${_scopeId}><span class="item-label" data-v-04b74c68${_scopeId}>挑战账户的余额</span><span class="item-val" data-v-04b74c68${_scopeId}>$10,000</span></div>`);
            });
            _push2(`<!--]--></div><button class="btn" data-v-04b74c68${_scopeId}>${ssrInterpolate(unref(t)("Challenges.ScalingPlan.buy"))} $1699</button></div>`);
          } else {
            return [
              createVNode(_component_publicTabBar, {
                tabList: unref(tabList),
                onTrigger: trigger
              }, null, 8, ["tabList"]),
              createVNode("div", { class: "scaling-plan-h5__collapse" }, [
                createVNode("div", { class: "list" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(4, (val) => {
                    return createVNode("div", {
                      class: "list-item",
                      key: val
                    }, [
                      createVNode("span", { class: "item-label" }, "挑战账户的余额"),
                      createVNode("span", { class: "item-val" }, "$10,000")
                    ]);
                  }), 64))
                ]),
                createVNode("button", {
                  class: "btn",
                  onClick: linkTo
                }, toDisplayString(unref(t)("Challenges.ScalingPlan.buy")) + " $1699", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/scalingPlanH5/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04b74c68"]]);
export {
  index as default
};
//# sourceMappingURL=index-BhbPMj9N.js.map
