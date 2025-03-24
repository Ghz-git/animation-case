import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { T as TOP_TRADER } from "./challengesData-Ie0NoZuw.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import { debounce } from "lodash-es";
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
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAlCAYAAADSvLDKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALNSURBVHgBvVkNb9NADHWu6crKBEwVg018/P+fhRgwdZsqqqwtFFL8Iofd0lzs3J32JCdqc/Fzfb6zzy2oB4fD4ZRvZyy4n7A4ebRj2bKsi6L4RRngcUEmwlULFzhWzPWn792iowgvXrK8JB0blpuQYoPRU769Y5kbhlcsyy5X0VH2gWVKdtSidD3inViuPct3f8ad93AxUln7/ns2ZkbjcBnBhfEfmav0ydu4e0XxuJKQU8HjwPOC4tA4y/8ALCgN8Mq5cax1XAhzcQA58Zhl0Wg417wvsT42xHq5cHGZlFl1nVAezBDqjp4u2lScKc8nlA/znIY3Cun5MIPxUUkmAG37+0v50Bi/p3zQZvI35cPEccZCltxQJvhJpAvmgqNyzbRrPfVAz4eflAnOU5grfGrl+cowxoTGeAmdG8oA0aU9X1I6aucpRZ3+jdJmwORRqUKXlDYD+6L7jaRw1Doo1sZWfhs27No6OJGrKhTlSPeYHVSBbwwEOPXcUgSECzsVSogF6dvubTn01Cv8t20lp2BLkRAuyANzWarcnbUGt1aDyflCzhaaXXusUWttc2oYU2k7jRGvDWOaGbYab5nGUefYAVgcdYeLarzEurZQMY0VJUJiXePatF0Ey8nH4vV7SoRwWTaF/8lU87zFE9XY1kcAFwautd+7CRovU6h5IkuqFy6t0YXMf+d/4QaUmcIltmMWwXXUMXMJypBNV5SAkU46KttLT5ETRZa+yi62DPC4rsh25kWc924IpSjD3opOlKU4QuyZi68umAuxjXafJcfAScFSvWRlMNra6oPhX2MzKXPB21p7pAVa3INOwq+3Hsug7EviArUmMmy91+rBBhf2CMrdi4Fxq5QY92FYpPehGO/C78+/pePFWouypF2li0D4gOtH364SQvefkc/0WPom/fMxBNltwDXNxoX6Aj+AJbUNbeX6JLtPFP4BJhgicccKaDsAAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAaVBMVEUAAAD/dwD/cAD/dgD/dwD/dwD/dwD/dwD/eAD/dgD/eAD/dgD/dwD/eAD/dQD/dAD/dQD/dwD/dwApKCx5Rhs2LSmUUBbXaAivWRDkbQWhVBNePCFsQB6UTxbBYAxRNiREMieGSxnycgMCs8hDAAAAEnRSTlMA3xBw77+AkCBQQM+vYGBAMG810AGbAAABtUlEQVRYw62YW3LDIAxFEWCwHSdx5biNnVfb/S+ymfxo6hgEFmcBZ3SlEQOoCLo3vgPAJ7CrvDmqLWhTWVxSHepsCxILV4bGWYwArpZqSKV4joAJQMOV4zERr2OeGjAZqCOxLGZgg/E+MBOz7nGYjWPqEdXU4Cbat3lZ3IRdzE4DbgT0P5HHzfiVBsnbRMFk4RyKcOkbNs23KTI5nVrQNA7D+MWXxBZ0HQYyhUs6IMdlIFNkUyrkuA2MqXq1GnlOnElTMpnJcMl4E2VDlJhobkcsYuqVwSImozwWMXnqtczUqR0WMcHKos2nMGPIBGptsXjGCRe8ie5DEj+lRFdW9Dsmic644L3Z02Pg+WSmxnEOeXCnOpmH1t/LPLQiRuahpe0lHqJV2go8BHfU8h46ak0BD+6fIl3Ag7VKynYnTzBZUrYLecLJVMLcrowHUq81M3mi1xq+pNvje0b2eSO/+glv2dQhokUBTeELu/wJUfZRQ7TCBhEGN2CKPkXlNRkVoMl7rreFPxDkXxpxGkgqp1U8jlVZp1UKtQOhhtiHv8aMVlnUKy5Lljxa46vdKyZA500fs/wB2uIe0jSHdBgAAAAASUVORK5CYII=";
const n = 4;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const spaceBetween = ref(0);
    const currentIndex = ref(2);
    const boxWidth = ref(0);
    const translateX = ref(0);
    const isMobile = computed(() => useCheckMobile().getItem());
    const trList = ref([]);
    const moveTo = debounce((index) => {
      if (currentIndex.value === index) return;
      if (!isMobile.value) {
        const dir = currentIndex.value < index ? "next" : "prev";
        if (dir === "next") {
          if (index >= n - 1) {
            translateX.value = -boxWidth.value * (index - (n - 1));
          }
        } else {
          if (index <= 0) {
            translateX.value = 0;
          } else if (index === TOP_TRADER.list.length - 2 && !isMobile.value) {
            translateX.value = -boxWidth.value * (index - 2);
          } else {
            translateX.value = -boxWidth.value * (index - 1);
          }
        }
      }
      currentIndex.value = index;
    }, 500, { "leading": true, "trailing": false });
    const bindPrev = () => {
      if (currentIndex.value === 0) return;
      moveTo(currentIndex.value - 1);
    };
    const bindNext = () => {
      if (currentIndex.value === TOP_TRADER.list.length - 1) return;
      moveTo(currentIndex.value + 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      _push(ssrRenderComponent(_component_publicMWrap, mergeProps({
        title: unref(t)(unref(TOP_TRADER).title)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="subTitle" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(unref(TOP_TRADER).desc))}</p><div class="traderSwiper" data-v-e0e3fbfc${_scopeId}><div class="swiperContainer" data-v-e0e3fbfc${_scopeId}><div class="inner" style="${ssrRenderStyle({ transform: `translateX(${unref(translateX)}px)` })}" data-v-e0e3fbfc${_scopeId}><!--[-->`);
            ssrRenderList(unref(trList), (item, index) => {
              _push2(`<div class="${ssrRenderClass([{ active: index === unref(currentIndex) }, "traderBox"])}" style="${ssrRenderStyle({ marginRight: unref(spaceBetween) + "px" })}" data-v-e0e3fbfc${_scopeId}><div class="container" data-v-e0e3fbfc${_scopeId}><img class="avatar" alt=""${ssrRenderAttr("src", item.avatar)} data-v-e0e3fbfc${_scopeId}><img class="dot" alt=""${ssrRenderAttr("src", _imports_0)} data-v-e0e3fbfc${_scopeId}><p class="name" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(item.firstName))} ${ssrInterpolate(unref(t)(item.lastName))}</p><p class="tag" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(unref(TOP_TRADER).trader))}</p><div class="descWrap" data-v-e0e3fbfc${_scopeId}><div class="top" data-v-e0e3fbfc${_scopeId}><div class="nation" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(item.from))}</div><div class="speech" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(item.shortSpeech))}</div><div class="speech" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(item.speech)}</div></div><div class="bottom" data-v-e0e3fbfc${_scopeId}><div class="price" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(item.profits)}</div><div class="profits" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(unref(TOP_TRADER).profitsStr))}</div></div></div></div><p class="outsideName" data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(item.lastName))}<br data-v-e0e3fbfc${_scopeId}>${ssrInterpolate(unref(t)(item.firstName))}</p><img class="outsideMore" alt=""${ssrRenderAttr("src", _imports_1)} data-v-e0e3fbfc${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (unref(currentIndex) !== 0) {
              _push2(`<i class="iconfont icon-arrows tsBtn prev" data-v-e0e3fbfc${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentIndex) !== unref(TOP_TRADER).list.length - 1) {
              _push2(`<i class="iconfont icon-arrows tsBtn next" data-v-e0e3fbfc${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)(unref(TOP_TRADER).desc)), 1),
              createVNode("div", { class: "traderSwiper" }, [
                createVNode("div", { class: "swiperContainer" }, [
                  createVNode("div", {
                    class: "inner",
                    style: { transform: `translateX(${unref(translateX)}px)` }
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(trList), (item, index) => {
                      return openBlock(), createBlock("div", {
                        class: ["traderBox", { active: index === unref(currentIndex) }],
                        key: index,
                        style: { marginRight: unref(spaceBetween) + "px" },
                        onClick: ($event) => unref(moveTo)(index)
                      }, [
                        createVNode("div", { class: "container" }, [
                          createVNode("img", {
                            class: "avatar",
                            alt: "",
                            src: item.avatar
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            class: "dot",
                            alt: "",
                            src: _imports_0
                          }),
                          createVNode("p", { class: "name" }, toDisplayString(unref(t)(item.firstName)) + " " + toDisplayString(unref(t)(item.lastName)), 1),
                          createVNode("p", { class: "tag" }, toDisplayString(unref(t)(unref(TOP_TRADER).trader)), 1),
                          createVNode("div", { class: "descWrap" }, [
                            createVNode("div", { class: "top" }, [
                              createVNode("div", { class: "nation" }, toDisplayString(unref(t)(item.from)), 1),
                              createVNode("div", { class: "speech" }, toDisplayString(unref(t)(item.shortSpeech)), 1),
                              createVNode("div", { class: "speech" }, toDisplayString(item.speech), 1)
                            ]),
                            createVNode("div", { class: "bottom" }, [
                              createVNode("div", { class: "price" }, toDisplayString(item.profits), 1),
                              createVNode("div", { class: "profits" }, toDisplayString(unref(t)(unref(TOP_TRADER).profitsStr)), 1)
                            ])
                          ])
                        ]),
                        createVNode("p", { class: "outsideName" }, [
                          createTextVNode(toDisplayString(unref(t)(item.lastName)), 1),
                          createVNode("br"),
                          createTextVNode(toDisplayString(unref(t)(item.firstName)), 1)
                        ]),
                        createVNode("img", {
                          class: "outsideMore",
                          alt: "",
                          src: _imports_1
                        })
                      ], 14, ["onClick"]);
                    }), 128))
                  ], 4)
                ]),
                unref(currentIndex) !== 0 ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "iconfont icon-arrows tsBtn prev",
                  onClick: bindPrev
                })) : createCommentVNode("", true),
                unref(currentIndex) !== unref(TOP_TRADER).list.length - 1 ? (openBlock(), createBlock("i", {
                  key: 1,
                  class: "iconfont icon-arrows tsBtn next",
                  onClick: bindNext
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/topTrader/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TopTrader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0e3fbfc"]]);
export {
  TopTrader as default
};
//# sourceMappingURL=index-pkzlXpfe.js.map
