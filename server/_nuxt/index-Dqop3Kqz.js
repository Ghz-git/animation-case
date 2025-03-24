import { computed, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "dayjs";
import { E as ElCollapse, a as ElCollapseItem } from "./index-BVvjx3G1.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "@vue/shared";
import "./event-DsDEmsKp.js";
import "lodash-unified";
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
import "consola";
import "@vueuse/core";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAADFBMVEUAAAD/dgD/dwD/dwBnSe8FAAAAA3RSTlMAgL+aK/KIAAAALElEQVQ4y2MYBUMIyH8ZFaSpYCgQ5P8EkUiC/+GAckFMiwaN30eQ4CgYrAAARYxUf6EGa2AAAAAASUVORK5CYII=";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const isMobile = computed(() => {
      return useCheckMobile().getItem();
    });
    const { t } = useI18n();
    let activeNames = ref([-1]);
    const toggle = (idx) => {
      console.log(idx, "000");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trading-list" }, _attrs))} data-v-afba11cd>`);
      _push(ssrRenderComponent(unref(ElCollapse), {
        modelValue: unref(activeNames),
        "onUpdate:modelValue": ($event) => isRef(activeNames) ? activeNames.value = $event : activeNames = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row" data-v-afba11cd${_scopeId}><!--[-->`);
            ssrRenderList(__props.list, (li, idx) => {
              _push2(`<!--[-->`);
              if (unref(isMobile) ? true : idx % 2 === 0) {
                _push2(ssrRenderComponent(unref(ElCollapseItem), {
                  title: li.title,
                  name: idx,
                  class: "item"
                }, {
                  title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="more-btn" data-v-afba11cd${_scopeId2}> ${ssrInterpolate(unref(t)(li.title))}`);
                    } else {
                      return [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "more-btn",
                          onChange: toggle
                        }, null, 32),
                        createTextVNode(" " + toDisplayString(unref(t)(li.title)), 1)
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="item-more" data-v-afba11cd${_scopeId2}>${ssrInterpolate(unref(t)(li.cxt))}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "item-more" }, toDisplayString(unref(t)(li.cxt)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
            if (!unref(isMobile)) {
              _push2(`<div class="row" data-v-afba11cd${_scopeId}><!--[-->`);
              ssrRenderList(__props.list, (li, idx) => {
                _push2(`<!--[-->`);
                if (idx % 2 !== 0) {
                  _push2(ssrRenderComponent(unref(ElCollapseItem), {
                    title: li.title,
                    name: idx,
                    class: "item"
                  }, {
                    title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="more-btn" data-v-afba11cd${_scopeId2}> ${ssrInterpolate(unref(t)(li.title))}`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "more-btn",
                            onChange: toggle
                          }, null, 32),
                          createTextVNode(" " + toDisplayString(unref(t)(li.title)), 1)
                        ];
                      }
                    }),
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="item-more" data-v-afba11cd${_scopeId2}>${ssrInterpolate(unref(t)(li.cxt))}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "item-more" }, toDisplayString(unref(t)(li.cxt)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "row" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.list, (li, idx) => {
                  return openBlock(), createBlock(Fragment, { key: li }, [
                    (unref(isMobile) ? true : idx % 2 === 0) ? (openBlock(), createBlock(unref(ElCollapseItem), {
                      key: 0,
                      title: li.title,
                      name: idx,
                      class: "item"
                    }, {
                      title: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "more-btn",
                          onChange: toggle
                        }, null, 32),
                        createTextVNode(" " + toDisplayString(unref(t)(li.title)), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "item-more" }, toDisplayString(unref(t)(li.cxt)), 1)
                      ]),
                      _: 2
                    }, 1032, ["title", "name"])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ]),
              !unref(isMobile) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.list, (li, idx) => {
                  return openBlock(), createBlock(Fragment, { key: li }, [
                    idx % 2 !== 0 ? (openBlock(), createBlock(unref(ElCollapseItem), {
                      key: 0,
                      title: li.title,
                      name: idx,
                      class: "item"
                    }, {
                      title: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "",
                          class: "more-btn",
                          onChange: toggle
                        }, null, 32),
                        createTextVNode(" " + toDisplayString(unref(t)(li.title)), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "item-more" }, toDisplayString(unref(t)(li.cxt)), 1)
                      ]),
                      _: 2
                    }, 1032, ["title", "name"])) : createCommentVNode("", true)
                  ], 64);
                }), 128))
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tradingRules/components/list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afba11cd"]]);
export {
  List as default
};
//# sourceMappingURL=index-Dqop3Kqz.js.map
