import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { _ as __nuxt_component_1 } from "./index-BaLuAdQ-.js";
import { ref, reactive, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./back-Dn6PN45-.js";
import { T as TAB_LIST } from "./index-D3nYuMsg.js";
import { _ as _export_sfc, u as useI18n, I as formatPrice, n as nuxtTo } from "../server.mjs";
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
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const preActive = ref(false);
    const nextActive = ref(true);
    const table = ref(null);
    const tabList = reactive(TAB_LIST);
    const scalingPlanList = ref([]);
    let list = ref({});
    let priceList = ref([]);
    let price = ref(0);
    let battleId = ref(0);
    let tableList = computed(() => {
      const res = /* @__PURE__ */ new Map();
      if (list.value && JSON.stringify(list.value) !== "{}") {
        for (const [key, val] of Object.entries(list.value)) {
          res.set(key, val);
        }
      }
      return res;
    });
    const trigger = (tab) => {
      list.value = scalingPlanList.value[tab.id];
      price.value = priceList.value[tab.id];
      battleId.value = tab.id;
    };
    const scroll = (direction) => {
      let isEnd = table.value.clientWidth + table.value.scrollLeft === table.value.scrollWidth;
      direction === -1 ? table.value.scrollLeft -= 200 : table.value.scrollLeft += 200;
      preActive.value = table.value.scrollLeft === 0 ? false : true;
      nextActive.value = isEnd ? false : true;
    };
    const preHandler = () => {
      scroll(-1);
    };
    const nextHandler = () => {
      scroll(1);
    };
    [__temp, __restore] = withAsyncContext(() => import("./challenges-BYqYpu7D.js")), __temp = await __temp, __restore(), __temp;
    const filterVal = (val) => {
      if (typeof val === "string") {
        return val.includes(".") ? t(val) : val === "null" ? "--" : val;
      } else {
        return val === "null" ? "--" : `$${val}`;
      }
    };
    const linkTo = () => {
      nuxtTo("/user", {
        idx: battleId.value
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      const _component_publicTabBar = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "scaling-plan" }, _attrs))} data-v-4f35c010>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: unref(t)("Challenges.ScalingPlan.title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="scaling-plan" data-v-4f35c010${_scopeId}>`);
            _push2(ssrRenderComponent(_component_publicTabBar, {
              tabList,
              onTrigger: trigger
            }, null, _parent2, _scopeId));
            _push2(`<div class="scaling-plan-wrap" data-v-4f35c010${_scopeId}><div class="scaling-plan__tables" data-v-4f35c010${_scopeId}><!--[-->`);
            ssrRenderList(unref(tableList), ([key, items]) => {
              _push2(`<div class="t-header" data-v-4f35c010${_scopeId}><div class="th tr" data-v-4f35c010${_scopeId}>${ssrInterpolate(unref(t)(key))}<i class="gap" data-v-4f35c010${_scopeId}></i></div><!--[-->`);
              ssrRenderList(items, (val, idx) => {
                _push2(`<div class="td tr" data-v-4f35c010${_scopeId}>${ssrInterpolate(filterVal(val))}<i class="gap" data-v-4f35c010${_scopeId}></i></div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div></div><div class="scaling-plan__control" data-v-4f35c010${_scopeId}><div class="${ssrRenderClass([{ active: preActive.value }, "opt pre"])}" data-v-4f35c010${_scopeId}><img${ssrRenderAttr("src", _imports_0)} data-v-4f35c010${_scopeId}></div><div class="${ssrRenderClass([{ active: nextActive.value }, "opt next"])}" data-v-4f35c010${_scopeId}><img${ssrRenderAttr("src", _imports_0)} data-v-4f35c010${_scopeId}></div></div><div class="scaling-plan__tips" data-v-4f35c010${_scopeId}>${ssrInterpolate(unref(t)("Challenges.ScalingPlan.tips"))}</div><button class="scaling-plan__btn" data-v-4f35c010${_scopeId}>${ssrInterpolate(unref(t)("Challenges.ScalingPlan.buy"))} $${ssrInterpolate(unref(formatPrice)(unref(price)))}</button></div>`);
          } else {
            return [
              createVNode("div", { class: "scaling-plan" }, [
                createVNode(_component_publicTabBar, {
                  tabList,
                  onTrigger: trigger
                }, null, 8, ["tabList"]),
                createVNode("div", {
                  class: "scaling-plan-wrap",
                  ref_key: "table",
                  ref: table
                }, [
                  createVNode("div", { class: "scaling-plan__tables" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tableList), ([key, items]) => {
                      return openBlock(), createBlock("div", {
                        class: "t-header",
                        key
                      }, [
                        createVNode("div", { class: "th tr" }, [
                          createTextVNode(toDisplayString(unref(t)(key)), 1),
                          createVNode("i", { class: "gap" })
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(items, (val, idx) => {
                          return openBlock(), createBlock("div", {
                            class: "td tr",
                            key: idx
                          }, [
                            createTextVNode(toDisplayString(filterVal(val)), 1),
                            createVNode("i", { class: "gap" })
                          ]);
                        }), 128))
                      ]);
                    }), 128))
                  ])
                ], 512),
                createVNode("div", { class: "scaling-plan__control" }, [
                  createVNode("div", {
                    class: ["opt pre", { active: preActive.value }],
                    onClick: preHandler
                  }, [
                    createVNode("img", { src: _imports_0 })
                  ], 2),
                  createVNode("div", {
                    class: ["opt next", { active: nextActive.value }],
                    onClick: nextHandler
                  }, [
                    createVNode("img", { src: _imports_0 })
                  ], 2)
                ]),
                createVNode("div", { class: "scaling-plan__tips" }, toDisplayString(unref(t)("Challenges.ScalingPlan.tips")), 1),
                createVNode("button", {
                  class: "scaling-plan__btn",
                  onClick: linkTo
                }, toDisplayString(unref(t)("Challenges.ScalingPlan.buy")) + " $" + toDisplayString(unref(formatPrice)(unref(price))), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/scalingPlan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f35c010"]]);
export {
  index as default
};
//# sourceMappingURL=index-BGuNJq9x.js.map
