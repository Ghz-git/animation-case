import { _ as __nuxt_component_1 } from "./client-only-Db1Q_2tj.js";
import { E as ElTooltip } from "./index-C-aEYaqc.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
/* empty css                   */
import { ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./doubt-Cq7olve3.js";
import typesTap from "./index-Cugr8uAE.js";
import lightingBtn from "./index-Bg8OR1km.js";
import border3Box from "./index-BpFK4D3P.js";
import { C as CHALLENGES_PLAN } from "./challengesData-Ie0NoZuw.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { u as useChallengeInfo } from "./useChallengeInfo-D8ZmMr9V.js";
import "hookable";
import "@vueuse/core";
import "@popperjs/core";
import "lodash-unified";
import "@vue/shared";
import "./index-DvP72MIN.js";
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
import "destr";
import "ohash";
import "klona";
import "decimal.js";
import "dayjs";
import "consola";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./yellow-BzR1n8Bd.js";
import "./challenge-C5uxJouc.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./challenges-DfBymhN9.js";
import "lodash-es";
const _imports_0 = "" + __buildAssetsURL("descPic.9hqYoxNU.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { challengesData, isEmptyData, getChallengeInfoHooks } = useChallengeInfo();
    const curIndex = ref(0);
    ref(0);
    const curLevel = ref(0);
    const translateX = ref(0);
    const { t, locale } = useI18n();
    computed(() => useCheckMobile().getItem());
    const bindCurChange = (e) => {
      curIndex.value = e;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_client_only = __nuxt_component_1;
      const _component_el_tooltip = ElTooltip;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "program" }, _attrs))} data-v-39051b0c><h3 class="title" data-v-39051b0c>${ssrInterpolate(unref(t)(unref(CHALLENGES_PLAN).title))}</h3>`);
      _push(ssrRenderComponent(typesTap, {
        curIndex: curIndex.value,
        data: (_a = unref(challengesData)) == null ? void 0 : _a.list,
        onCurChange: bindCurChange
      }, null, _parent));
      _push(`<div class="descWrap"${ssrRenderAttr("lang", unref(locale))} data-v-39051b0c><div class="textCon" data-v-39051b0c><p class="p1" data-v-39051b0c>${ssrInterpolate(unref(t)(unref(CHALLENGES_PLAN).accountSize))}</p><p class="p2" data-v-39051b0c>${ssrInterpolate(!unref(isEmptyData) ? (_c = (_b = unref(challengesData)) == null ? void 0 : _b.list[curIndex.value]) == null ? void 0 : _c.amount : "--")}</p></div><div class="textCon" data-v-39051b0c><p class="p1" data-v-39051b0c>${ssrInterpolate(unref(t)(unref(CHALLENGES_PLAN).stages))}</p><p class="p2" data-v-39051b0c>3</p></div><div class="textCon" data-v-39051b0c><p class="p1" data-v-39051b0c>${ssrInterpolate(unref(t)(unref(CHALLENGES_PLAN).profits))}</p><p class="p2" data-v-39051b0c>${ssrInterpolate(unref(t)(unref(CHALLENGES_PLAN).highest))} ${ssrInterpolate(!unref(isEmptyData) ? "90%" : "")}<span data-v-39051b0c>(${ssrInterpolate(unref(t)(unref(CHALLENGES_PLAN).noLimit))})</span></p></div><img class="pic" alt=""${ssrRenderAttr("src", _imports_0)} data-v-39051b0c></div>`);
      if (!unref(isEmptyData)) {
        _push(`<!--[--><div class="tableWrapMob mob_show" data-v-39051b0c><div class="${ssrRenderClass([`current${curLevel.value + 1}`, "levelTaps"])}" data-v-39051b0c><!--[-->`);
        ssrRenderList((_e = (_d = unref(challengesData)) == null ? void 0 : _d.list[curIndex.value]) == null ? void 0 : _e.levelList, (item, idx) => {
          _push(`<p class="${ssrRenderClass([{ active: curLevel.value === idx }, "tap"])}" data-v-39051b0c>Step ${ssrInterpolate(item.step)}</p>`);
        });
        _push(`<!--]--></div><div class="list" data-v-39051b0c><div class="list_inner" style="${ssrRenderStyle({ transform: `translateX(${translateX.value}px)` })}" data-v-39051b0c><!--[-->`);
        ssrRenderList((_g = (_f = unref(challengesData)) == null ? void 0 : _f.list[curIndex.value]) == null ? void 0 : _g.levelList, (item, idx) => {
          _push(`<div class="liItem" data-v-39051b0c>`);
          _push(ssrRenderComponent(border3Box, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="item" data-v-39051b0c${_scopeId}><p class="level" data-v-39051b0c${_scopeId}>Step ${ssrInterpolate(item.step)}</p><p class="name" data-v-39051b0c${_scopeId}>${ssrInterpolate(unref(t)(item.tag))}</p><div class="line" data-v-39051b0c${_scopeId}></div><!--[-->`);
                ssrRenderList(item.children, (child, idx2) => {
                  _push2(`<div class="textCon" data-v-39051b0c${_scopeId}><p class="text" data-v-39051b0c${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
                  _push2(`<span data-v-39051b0c${_scopeId}>${ssrInterpolate(unref(t)(child.title))}</span></p><p class="num" data-v-39051b0c${_scopeId}>${ssrInterpolate(child.isLang ? unref(t)(child.content) : child.content)}</p></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "item" }, [
                    createVNode("p", { class: "level" }, "Step " + toDisplayString(item.step), 1),
                    createVNode("p", { class: "name" }, toDisplayString(unref(t)(item.tag)), 1),
                    createVNode("div", { class: "line" }),
                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, idx2) => {
                      return openBlock(), createBlock("div", {
                        class: "textCon",
                        key: idx2
                      }, [
                        createVNode("p", { class: "text" }, [
                          createVNode(_component_client_only, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_tooltip, {
                                "show-after": 300,
                                class: "box-item",
                                trigger: "click",
                                effect: "dark",
                                content: unref(t)(child.desc),
                                placement: "bottom",
                                "append-to": ".program",
                                "popper-class": "aTips"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "icon",
                                    alt: "",
                                    src: _imports_0$1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["content"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("span", null, toDisplayString(unref(t)(child.title)), 1)
                        ]),
                        createVNode("p", { class: "num" }, toDisplayString(child.isLang ? unref(t)(child.content) : child.content), 1)
                      ]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div><div class="tableWrap pc_show" data-v-39051b0c><!--[-->`);
        ssrRenderList((_i = (_h = unref(challengesData)) == null ? void 0 : _h.list[curIndex.value]) == null ? void 0 : _i.levelList, (item, idx) => {
          _push(`<div class="tableCon" data-v-39051b0c>`);
          _push(ssrRenderComponent(border3Box, { class: "leftBorder" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="nameBox" data-v-39051b0c${_scopeId}><p class="level" data-v-39051b0c${_scopeId}>Step ${ssrInterpolate(item.step)}</p><p class="name" data-v-39051b0c${_scopeId}>${ssrInterpolate(unref(t)(item.tag))}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "nameBox" }, [
                    createVNode("p", { class: "level" }, "Step " + toDisplayString(item.step), 1),
                    createVNode("p", { class: "name" }, toDisplayString(unref(t)(item.tag)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(border3Box, { class: "rightBorder" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(item.children, (child, idx2) => {
                  _push2(`<div class="textLine" data-v-39051b0c${_scopeId}><p class="text1" data-v-39051b0c${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(t)(child.title))}</p><p class="text2" data-v-39051b0c${_scopeId}>${ssrInterpolate(child.isLang ? unref(t)(child.content) : child.content)}</p></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child, idx2) => {
                    return openBlock(), createBlock("div", {
                      class: "textLine",
                      key: idx2
                    }, [
                      createVNode("p", { class: "text1" }, [
                        createVNode(_component_client_only, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_tooltip, {
                              "show-after": 300,
                              class: "box-item",
                              effect: "dark",
                              content: unref(t)(child.desc),
                              placement: "left",
                              "append-to": ".program",
                              "popper-class": "aTips"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  class: "icon",
                                  alt: "",
                                  src: _imports_0$1
                                })
                              ]),
                              _: 2
                            }, 1032, ["content"])
                          ]),
                          _: 2
                        }, 1024),
                        createTextVNode(" " + toDisplayString(unref(t)(child.title)), 1)
                      ]),
                      createVNode("p", { class: "text2" }, toDisplayString(child.isLang ? unref(t)(child.content) : child.content), 1)
                    ]);
                  }), 128))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="btnComponents" data-v-39051b0c>`);
        _push(ssrRenderComponent(lightingBtn, { url: "/user" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(`<p class="num" data-v-39051b0c${_scopeId}>${ssrInterpolate((_b2 = (_a2 = unref(challengesData)) == null ? void 0 : _a2.list[curIndex.value]) == null ? void 0 : _b2.payment)}</p><p class="t" data-v-39051b0c${_scopeId}>${ssrInterpolate(unref(t)(unref(CHALLENGES_PLAN).start))}</p>`);
            } else {
              return [
                createVNode("p", { class: "num" }, toDisplayString((_d2 = (_c2 = unref(challengesData)) == null ? void 0 : _c2.list[curIndex.value]) == null ? void 0 : _d2.payment), 1),
                createVNode("p", { class: "t" }, toDisplayString(unref(t)(unref(CHALLENGES_PLAN).start)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/program/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const challengesProgram = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39051b0c"]]);
export {
  challengesProgram as default
};
//# sourceMappingURL=index-CnkYLAqF.js.map
